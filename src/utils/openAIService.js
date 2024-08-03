import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getOpenAIResponse = async (prompt) => {
  const response = await openai.post("/chat/completions", {
    model: "gpt-3.5-turbo",
    messages: [{ role: "assistant", content: prompt }],
    max_tokens: 100,
  });
  return response;
};
