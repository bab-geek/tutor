import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure API_KEY is set in environment

export const sendMessageToAI = async (message: string, history: { role: 'user' | 'model'; text: string }[] = []): Promise<string> => {
  if (!apiKey) {
    return "Please configure your API Key to use the AI Tutor feature.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are Prof Alexander Juma, a highly experienced private tutor specializing in the IGCSE, A Level, and IB (International Baccalaureate) curricula.
        You specialize in Mathematics and Physics.
        You provide home tuition where you commute to the student's home on weekends and holidays.
        Your tone is professional, academic, and reassuring.
        The user is a parent or student inquiring about tuition.
        If asked about booking, direct them to the booking form on the website.
        Contact: 0731031559.`
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the internet right now. Please check your connection.";
  }
};