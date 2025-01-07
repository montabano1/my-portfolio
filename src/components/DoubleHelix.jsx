import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DoubleHelix = () => {
  // Rotation state
  const [rotation, setRotation] = useState(0);

  // Controls whether we’re in “auto-rotate” mode or not
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Which color is active, if any
  const [activeColor, setActiveColor] = useState(null);

  // Connection state (width expansion)
  const [isConnecting, setIsConnecting] = useState(false);

  // For staggered (sequential) expansion
  const [expandedIndices, setExpandedIndices] = useState(null);

  // A ref to our auto-rotation interval
  const autoRotateRef = useRef(null);

  const [isColoringStrands, setIsColoringStrands] = useState(false);

  // Helix constants
  const HELIX_HEIGHT = 800;
  const HELIX_WIDTH = 8;
  const NUCLEOTIDE_WIDTH = 40;
  const NUCLEOTIDE_HEIGHT = 10;
  const HELIX_RADIUS = 60;
  const PAIRS_COUNT = 16;
  const COLORS_PER_TURN = 4;
  const TOTAL_TURNS = Math.ceil(PAIRS_COUNT / COLORS_PER_TURN);

  // Angles you requested: group1=90, group2=45, group3=0, group4=315
  const colorGroups = {
    group1: { base: '#FF6B6B', glow: '#FF8787', missing: 3,  angle: 90  },
    group2: { base: '#4ECDC4', glow: '#6BE5DC', missing: 7,  angle: 45  },
    group3: { base: '#FFD93D', glow: '#FFE169', missing: 11, angle: 0   },
    group4: { base: '#95A5FF', glow: '#ADB8FF', missing: 15, angle: 315 }
  };

  /**
   * Generate helix points from rotation
   */
  const generateHelixPoints = (angle) => {
    const points = [];
    for (let i = 0; i < PAIRS_COUNT; i++) {
      const turnIndex = Math.floor(i / COLORS_PER_TURN);
      const positionInTurn = i % COLORS_PER_TURN;
      const turnHeight = HELIX_HEIGHT / TOTAL_TURNS;
      const y = (turnIndex * turnHeight) + (positionInTurn * (turnHeight / COLORS_PER_TURN));

      const t = y / HELIX_HEIGHT;
      // baseAngle includes rotation
      const baseAngle = (t * Math.PI * 4) + (angle * Math.PI / 180);

      const x1 = HELIX_RADIUS * Math.sin(baseAngle);
      const x2 = HELIX_RADIUS * Math.sin(baseAngle + Math.PI);
      const z1 = Math.cos(baseAngle);
      const z2 = Math.cos(baseAngle + Math.PI);

      const colorGroup = `group${(i % 4) + 1}`;

      points.push({
        index: i,
        colorGroup,
        strand1: { x: x1, y, z: z1 },
        strand2: { x: x2, y, z: z2 }
      });
    }
    return points;
  };

  // We generate the helix points each render (based on current rotation)
  const points = generateHelixPoints(rotation);

  /**
   * 1) Auto-rotate if no active color
   */
  useEffect(() => {
    if (isAutoRotating && !activeColor) {
      // Start an interval that increments rotation
      autoRotateRef.current = setInterval(() => {
        setRotation((prev) => (prev + 1) % 360);
      }, 50);
    }
    // Cleanup
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    };
  }, [isAutoRotating, activeColor]);

  /**
   * 2) Animate rotation clockwise to a color’s angle (no setInterval).
   *    We do a requestAnimationFrame linear interpolation.
   */
  const animateRotationClockwise = (toAngle, rotationSpeed = 360) => {
    // rotationSpeed is in degrees per second
    return new Promise((resolve) => {
        if (autoRotateRef.current) {
            clearInterval(autoRotateRef.current);
            autoRotateRef.current = null;
        }

        const fromAngle = rotation;

        // Calculate the clockwise difference
        let diff = toAngle - fromAngle;
        while (diff < 0) {
            diff += 360;
        }
        const finalAngle = fromAngle + diff;

        // Calculate duration based on rotation speed
        const duration = (diff / rotationSpeed) * 1000; // Convert to milliseconds

        let startTime = 0;
        function loop(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Linear interpolation for current rotation
            const current = fromAngle + diff * progress;
            setRotation(current);

            if (progress < 1) {
                requestAnimationFrame(loop);
            } else {
                // Snap exactly to the final angle
                setRotation(finalAngle % 360);
                resolve();
            }
        }
        requestAnimationFrame(loop);
    });
};


  /**
   * 3) Once rotation is done, we set isConnecting=true,
   *    and then do a top->bottom sequence of expansions.
   */
  useEffect(() => {
    // Only run if we just switched "isConnecting" to true
    // and we have an activeColor
    if (!isConnecting || !activeColor) return;

    // Clear out old expansions first
    setExpandedIndices(null);

    // Gather points for the active color
    // (No need to put "points" in the dependency array if we want
    //  to freeze the geometry at this moment in time.)
    const colorPoints = points
      .filter((p) => p.colorGroup === activeColor)
      // Sort by top->bottom
      .sort((a, b) => a.strand1.y - b.strand1.y);

    // Stagger each expansion ~1.3s
    let delay = 0;
    colorPoints.forEach((pair) => {
      setTimeout(() => {
        setExpandedIndices(pair.index);
      }, delay);
      delay += 200;
    });
    setTimeout(() => {
        setExpandedIndices(100);
      }, delay);
    // We do NOT set anything else here to avoid re-triggering this effect
    // => no infinite loop
  }, [isConnecting, activeColor]); 
  // Note: "points" is intentionally omitted to avoid repeated triggers

  /**
   * Nucleotide rect
   */
  const Nucleotide = ({ point, side }) => {
    const { colorGroup, index } = point;
    const colors = colorGroups[colorGroup];
    const isActiveColor = activeColor === colorGroup;

    // which is physically left vs. right
    const leftIsStrand1 = point.strand1.x < point.strand2.x;
    const leftCoord = leftIsStrand1 ? point.strand1 : point.strand2;
    const rightCoord = leftIsStrand1 ? point.strand2 : point.strand1;
    const coord = side === 'left' ? leftCoord : rightCoord;

    const scale = ((coord.z + 1) / 2) * 0.5 + 0.5;
    const opacity = ((coord.z + 1) / 2) * 0.7 + 0.3;

    // Hide if connecting but not active color
    if (isConnecting && !isActiveColor) return null;

    // Expand only if "expandedIndices" includes this pair index
    // (and side is left)
    const distance = Math.abs(point.strand2.x - point.strand1.x);
    const shouldExpand = side === 'left' && expandedIndices == index;
    const alreadyAnimated = (expandedIndices ?? 0) > index
    const unanimatedWidth = alreadyAnimated ? distance + NUCLEOTIDE_WIDTH + 1 : NUCLEOTIDE_WIDTH

    if (side === 'left') {
      return (
        <motion.rect
          key={`${index}-left`}
          x={alreadyAnimated ? coord.x - NUCLEOTIDE_WIDTH + 5 : coord.x - NUCLEOTIDE_WIDTH / 2}
          y={coord.y - NUCLEOTIDE_HEIGHT / 2}
          height={NUCLEOTIDE_HEIGHT}
          rx={2}
          fill={colors.base}
          opacity={opacity}
          initial={{ width: unanimatedWidth }}
          animate={{
            width: shouldExpand ? distance + NUCLEOTIDE_WIDTH : unanimatedWidth,
            filter: shouldExpand ? `drop-shadow(0 0 8px ${colors.glow})` : 'none'
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left', scale }}
        />
      );
    }

    // Right side
    return (
      <motion.rect
        key={`${index}-right`}
        x={coord.x - NUCLEOTIDE_WIDTH / 2}
        y={coord.y - NUCLEOTIDE_HEIGHT / 2}
        width={NUCLEOTIDE_WIDTH}
        height={NUCLEOTIDE_HEIGHT}
        rx={2}
        fill={colors.base}
        opacity={opacity}
        initial={false}
        style={{ scale }}
      />
    );
  };

  /**
   * Handle color clicks
   */
  const handleColorClick = async (group) => {
    if (activeColor === group) {
        // reset
        setActiveColor(null);
        setIsConnecting(false);
        setExpandedIndices(null);
        setIsAutoRotating(true);
        setIsColoringStrands(false);
    } else {
        setActiveColor(group);
        setIsConnecting(false);
        setExpandedIndices(null);
        setIsAutoRotating(false);
        setIsColoringStrands(false);

        // animate to the color’s angle, clockwise
        const desiredAngle = colorGroups[group].angle;
        await animateRotationClockwise(desiredAngle);

        // once done
        setIsConnecting(true);

        // Trigger strand coloring after connecting animation
        setTimeout(() => {
            setIsColoringStrands(true);
        }, 800); // Adjust delay as needed
    }
};


  return (
    <div className="w-1/3 h-screen flex items-center justify-center bg-black">
      {/* color buttons */}
      <div className="absolute top-4 right-4 space-x-2">
        {Object.entries(colorGroups).map(([group, colors]) => (
          <button
            key={group}
            className="px-4 py-2 rounded"
            style={{
              backgroundColor: colors.base,
              opacity: activeColor === group ? 1 : 0.7
            }}
            onClick={() => handleColorClick(group)}
          >
            &nbsp;
          </button>
        ))}
      </div>

      <svg
        width="100%"
        height="100%"
        viewBox={`${-HELIX_RADIUS - 50} -20 ${2 * HELIX_RADIUS + 100} ${HELIX_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* left backbone */}
        <motion.path
    d={points
        .map((p, i) =>
            i === 0
                ? `M ${p.strand1.x} ${p.strand1.y}`
                : `L ${p.strand1.x} ${p.strand1.y}`
        )
        .join(' ')}
    fill="none"
    stroke={isColoringStrands ? colorGroups[activeColor]?.base : "rgba(147, 197, 253, 0.3)"}
    strokeWidth={HELIX_WIDTH}
    initial={{ stroke: "rgba(147, 197, 253, 0.3)" }}
    animate={{
        stroke: isColoringStrands ? colorGroups[activeColor]?.base : "rgba(147, 197, 253, 0.3)",
    }}
    transition={{
        duration: points.length * 0.1, // Adjust speed of animation
        ease: "easeInOut",
    }}
/>

<motion.path
    d={points
        .map((p, i) =>
            i === 0
                ? `M ${p.strand2.x} ${p.strand2.y}`
                : `L ${p.strand2.x} ${p.strand2.y}`
        )
        .join(' ')}
    fill="none"
    stroke={isColoringStrands ? colorGroups[activeColor]?.base : "rgba(147, 197, 253, 0.3)"}
    strokeWidth={HELIX_WIDTH}
    initial={{ stroke: "rgba(147, 197, 253, 0.3)" }}
    animate={{
        stroke: isColoringStrands ? colorGroups[activeColor]?.base : "rgba(147, 197, 253, 0.3)",
    }}
    transition={{
        duration: points.length * 0.1, // Adjust speed of animation
        ease: "easeInOut",
    }}
/>


        {points.map((point) => (
          <g key={point.index}>
            <Nucleotide point={point} side="left" />
            <Nucleotide point={point} side="right" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default DoubleHelix;
