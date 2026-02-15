// src/utils/Chatbot.js
export const Chatbot = {
  getResponse: (input) => {
    if (input.toLowerCase().includes("hi")) return "Hello!";
    if (input.toLowerCase().includes("how are you")) return "I'm good, thanks!";
    return "I don't understand.";
  },
};
