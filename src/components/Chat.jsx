import { useState } from "react";
import { getOpenAIResponse } from "../utils/openAIService";
import InputBox from "./ui/InputBox";



const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add the user's message to the messages state
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, type: "sent" },
    ]);

    // Clear the input field
    setInput("");

    // Get the response from OpenAI API
    try {
      const aiResponse = await getOpenAIResponse(input);
      const aiMessage = aiResponse.data.choices[0].message.content;

      // Add the AI's response to the messages state
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiMessage, type: "received" },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (

    <div className="flex flex-col h-full">
      <div className="flex-1 w-full overflow-y-auto p-4">
        <div className="w-full max-w-2xl mx-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "sent" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-xs  font-size-1rem ${
                  message.type === "sent"
                    ? "bg-[#3D365C] text-white py-1  rounded-2xl  px-3"
                    : " text-white border border-gray-400 py-3  rounded-3xl  px-4"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="flex">
          <InputBox
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  ); 
};

export default Chat;
