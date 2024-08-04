import React, { useState, useEffect } from 'react';
import { createThread, getChatResponse } from "../utils/openai";
import InputBox from './ui/InputBox';
import Recommendations from './Recommendations';

const Chatbot = ({ initialData }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [threadId, setThreadId] = useState("");

  useEffect(() => {
    if (initialData) {
      const summaryMessage = {
        role: 'assistant',
        content: 'How can I help you ?' 
      };
      setMessages([summaryMessage]);
    }
    const thread=createThread();
    thread.then((result) => {
        console.log("Thread created with ID:", result.id);
        setThreadId(result.id); 
      }).catch((error) => {
        console.error("Error creating thread:", error);
      });
   
  }, [initialData]);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages([...messages, userMessage]);

      try {
        const response = await getChatResponse(input,threadId);
        const assistantMessage = { role: 'assistant', content: response };

        setMessages([...messages, userMessage, assistantMessage]);
        setInput('');
        if (!threadId) setThreadId("");
      } catch (error) {
        console.log(error)
        setMessages([...messages, { role: 'assistant', content: 'Error: Unable to fetch response.' }]);
      }
    }
  };

  return (
    <div className="flex flex-col h-full">
    <div className="flex-1 w-full overflow-y-auto p-4">
      <div className="w-full max-w-2xl mx-auto">
      <Recommendations/>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-xs  font-size-1rem text-white ${
                message.role === "user"
                  ? "bg-[#3D365C] text-white py-1  rounded-2xl  px-3"
                  : " text-white border border-gray-400 py-3  rounded-3xl  px-4"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full max-w-3xl mx-auto p-4">
      <form onSubmit={handleSend} className="flex">
        <InputBox
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleSend}
        />
      </form>
    </div>
  </div>
  );
};

export default Chatbot;
