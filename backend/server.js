// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// System prompt to give context about you and your portfolio
const SYSTEM_PROMPT = `You are a helpful AI assistant for [YOUR NAME]'s portfolio website. Here's what you know about [YOUR NAME]:
- Full stack developer with expertise in [YOUR SKILLS]
- Currently working at/as [YOUR CURRENT ROLE]
- Previously worked at [PREVIOUS EXPERIENCES]
- Notable projects include [YOUR PROJECTS]
- Education: [YOUR EDUCATION]

Your role is to:
1. Answer questions about [YOUR NAME]'s experience, skills, and projects
2. Help visitors understand [YOUR NAME]'s background and capabilities
3. Provide relevant examples of [YOUR NAME]'s work
4. Guide visitors to relevant sections of the portfolio
5. Help with scheduling calls or providing contact information when appropriate

Keep responses concise, professional, and engaging. If you don't know something specific, direct visitors to contact [YOUR NAME] directly.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    res.json({ 
      message: completion.choices[0].message.content,
      role: 'assistant'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});