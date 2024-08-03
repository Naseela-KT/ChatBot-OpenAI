import { useState } from "react";
import { getOpenAIResponse } from "../utils/openAIService";

const Chat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aiResponse = await getOpenAIResponse(input);
    console.log("response...");
    console.log(aiResponse.data.choices[0].message.content);
    setResponse(aiResponse.data.choices[0].message.content);
  };

  return (
    <div>
      <h1 className="text-white">AI Chat Bot</h1>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit">Get response</button>
      </form>
      <div>
        <p className="text-white">{response}</p>
      </div>
    </div>
  );
};

export default Chat;
