import React, { useState, useRef, useEffect } from 'react';
import { Send, ChevronRight } from 'lucide-react';
import { db, auth } from '../main';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import InteractiveAvatar from './InteractiveAvatar';

const CHAT_API_URL = 'https://us-central1-my-portfolio-4ace3.cloudfunctions.net/chat';
const MESSAGE_LIMIT = 50;

const ChatMessage = ({ text, isUser, isLoading }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div 
      className={`rounded-2xl px-4 py-2 max-w-[80%] ${
        isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'
      }`}
    >
      {isLoading ? (
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      ) : (
        <p className="text-sm md:text-base">{text}</p>
      )}
    </div>
  </div>
);

const QuickReply = ({ text, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors 
                text-sm whitespace-nowrap flex items-center gap-2 
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {text}
    <ChevronRight size={16} />
  </button>
);

const ChatbotLanding = () => {
    const [messages, setMessages] = useState([{
      text: "👋 Hello! I'm Michael's AI assistant. I can tell you all about his experience at Meta, his work in full-stack development, and his projects. What would you like to know?",
      isUser: false,
      timestamp: new Date().toISOString()
    }]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [conversationId, setConversationId] = useState(null);
    const [messageCount, setMessageCount] = useState(0);
    const [userId, setUserId] = useState(null);
    const messagesEndRef = useRef(null);

    const quickReplies = [
        "Tell me about your experience",
        "Show me your projects",
        "What are your skills?",
        "How can I contact you?"
      ];
  
    // Initialize anonymous auth only
    useEffect(() => {
      const initAuth = async () => {
        try {
          const userCredential = await signInAnonymously(auth);
          setUserId(userCredential.user.uid);
        } catch (error) {
          console.error("Error initializing auth:", error);
        }
      };
      initAuth();
    }, []);
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(scrollToBottom, [messages]);
  
    const handleSend = async (text) => {
        if (!text.trim() || isLoading || !userId) return;
      
        // Add the user's message to the UI
        const userMessage = {
          text,
          isUser: true,
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);
      
        try {
          // Fetch the bot response from OpenAI
          const messageHistory = messages.concat(userMessage).map((msg) => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text,
          }));
      
          const response = await fetch(CHAT_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: messageHistory }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
      
          const botResponse = {
            text: data.message,
            isUser: false,
            timestamp: new Date().toISOString(),
          };
      
          // Add the bot's response to the UI
          setMessages((prev) => [...prev, botResponse]);
      
          // Update Firestore with both user message and bot response
          if (conversationId) {
            await updateDoc(doc(db, 'conversations', conversationId), {
              messages: [...messages, userMessage, botResponse],
              messageCount: messageCount + 1,
              lastUpdated: serverTimestamp(),
              userId: userId,
            });
          } else {
            const docRef = await addDoc(collection(db, 'conversations'), {
              userId: userId,
              startedAt: serverTimestamp(),
              messages: [userMessage, botResponse],
              messageCount: 1,
            });
            setConversationId(docRef.id);
          }
        } catch (error) {
          console.error('Error:', error);
      
          // Handle errors gracefully
          const errorMessage = {
            text: 'I apologize, but I\'m having trouble connecting. Please try again later.',
            isUser: false,
            timestamp: new Date().toISOString(),
          };
          setMessages((prev) => [...prev, errorMessage]);
        } finally {
          setIsLoading(false);
        }
      };
      

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <InteractiveAvatar />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="h-96 overflow-y-auto mb-4 p-4">
            {messages.map((msg, idx) => (
              <ChatMessage 
                key={idx} 
                text={msg.text} 
                isUser={msg.isUser} 
              />
            ))}
            {isLoading && (
              <ChatMessage text="" isUser={false} isLoading={true} />
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {quickReplies.map((reply, idx) => (
              <QuickReply 
                key={idx}
                text={reply}
                onClick={() => handleSend(reply)}
                disabled={isLoading || messageCount >= MESSAGE_LIMIT}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
              placeholder={messageCount >= MESSAGE_LIMIT ? "Message limit reached" : "Type your message..."}
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              disabled={isLoading || messageCount >= MESSAGE_LIMIT}
            />
            <button
              onClick={() => handleSend(inputValue)}
              disabled={isLoading || !inputValue.trim() || messageCount >= MESSAGE_LIMIT}
              className={`p-2 rounded-full bg-blue-500 text-white transition-colors ${
                isLoading || !inputValue.trim() || messageCount >= MESSAGE_LIMIT 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-blue-600'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
          
          {messageCount > 0 && (
            <div className="text-xs text-gray-500 mt-2 text-right">
              Messages: {messageCount}/{MESSAGE_LIMIT}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotLanding;