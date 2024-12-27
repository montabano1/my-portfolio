import React, { useState, useRef, useEffect } from 'react';
import { Send, ChevronRight } from 'lucide-react';

const ChatMessage = ({ message, isUser }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`rounded-2xl px-4 py-2 max-w-[80%] ${
      isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'
    }`}>
      <p className="text-sm md:text-base">{message}</p>
    </div>
  </div>
);

const QuickReply = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm whitespace-nowrap flex items-center gap-2"
  >
    {text}
    <ChevronRight size={16} />
  </button>
);

const InteractiveAvatar = () => {
  const svgRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;
      const svgRect = svgRef.current.getBoundingClientRect();
      const svgCenterX = svgRect.left + svgRect.width / 2;
      const svgCenterY = svgRect.top + svgRect.height / 2;
      
      setMousePos({
        x: e.clientX - svgCenterX,
        y: e.clientY - svgCenterY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!leftEyeRef.current || !rightEyeRef.current) return;
    const maxMove = 10;
    const angle = Math.atan2(mousePos.y, mousePos.x);
    const distance = Math.min(Math.hypot(mousePos.x, mousePos.y) / 100, 1);
    
    const eyeX = Math.cos(angle) * maxMove * distance;
    const eyeY = Math.sin(angle) * maxMove * distance;

    leftEyeRef.current.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
    rightEyeRef.current.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
  }, [mousePos]);

  return (
    <div className="w-64 h-64 md:w-96 md:h-96">
      <svg ref={svgRef} viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE0B2" />
            <stop offset="100%" stopColor="#FFCC80" />
          </linearGradient>
        </defs>
        
        {/* Face shape with gradient */}
        <path
          d="M200 350 
             C 280 350, 350 280, 350 200
             C 350 120, 280 50, 200 50
             C 120 50, 50 120, 50 200
             C 50 280, 120 350, 200 350"
          fill="url(#faceGradient)"
          stroke="#000000"
          strokeWidth="2"
        />
        
        {/* Eye sockets */}
        <ellipse cx="150" cy="180" rx="30" ry="25" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <ellipse cx="250" cy="180" rx="30" ry="25" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        
        {/* Animated eyes */}
        <g ref={leftEyeRef}>
          <circle cx="150" cy="180" r="15" fill="#FFFFFF" />
          <circle cx="150" cy="180" r="10" fill="#4B89DC" />
          <circle cx="150" cy="180" r="5" fill="#000000" />
          <circle cx="145" cy="175" r="3" fill="#FFFFFF" />
        </g>
        <g ref={rightEyeRef}>
          <circle cx="250" cy="180" r="15" fill="#FFFFFF" />
          <circle cx="250" cy="180" r="10" fill="#4B89DC" />
          <circle cx="250" cy="180" r="5" fill="#000000" />
          <circle cx="245" cy="175" r="3" fill="#FFFFFF" />
        </g>
        
        {/* Nose */}
        <path
          d="M200 200 
             C 205 220, 215 230, 200 240
             C 185 230, 195 220, 200 200"
          fill="#FFD0A1"
        />
        
        {/* Mouth - slight smile */}
        <path
          d="M160 280 
             C 180 300, 220 300, 240 280"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const ChatbotLanding = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm [Your Name]'s portfolio assistant. What would you like to know?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const quickReplies = [
    "Tell me about your experience",
    "Show me your projects",
    "What are your skills?",
    "How can I contact you?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { text, isUser: true }]);
    setInputValue('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "This is a placeholder response. Backend integration coming soon!",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Avatar Section */}
        <div className="flex justify-center mb-8">
          <InteractiveAvatar />
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          {/* Messages */}
          <div className="h-96 overflow-y-auto mb-4 p-4">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} {...msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {quickReplies.map((reply, idx) => (
              <QuickReply 
                key={idx}
                text={reply}
                onClick={() => handleSend(reply)}
              />
            ))}
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => handleSend(inputValue)}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotLanding;