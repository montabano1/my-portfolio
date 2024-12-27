import { initializeApp } from 'firebase-admin/app';
import * as functions from 'firebase-functions';
import OpenAI from 'openai';

initializeApp();

const openai = new OpenAI({
  apiKey: functions.config().openai.key
});

const SYSTEM_PROMPT = `You are a helpful AI assistant for Michael Montalbano's portfolio website. Here's what you know about Michael Montalbano:
- Full stack developer with expertise in react and react-native, swift, and JS.
- Currently working at Meta
- Previously worked at Earthcam
- Notable projects include Tutorius
- Education: Columbia

Your role is to:
1. Answer questions about Michael Montalbano's experience, skills, and projects
2. Help visitors understand Michael Montalbano's background and capabilities
3. Provide relevant examples of Michael Montalbano's work
4. Guide visitors to relevant sections of the portfolio
5. Help with scheduling calls or providing contact information when appropriate

Keep responses concise, professional, and engaging. If you don't know something specific, direct visitors to contact Michael Montalbano directly.`;

export const chat = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      res.status(400).send('Invalid request body');
      return;
    }

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
    res.status(500).send('Internal Server Error');
  }
});

export const test = functions.https.onRequest((req, res) => {
  res.json({ message: "Firebase Functions are working!" });
});