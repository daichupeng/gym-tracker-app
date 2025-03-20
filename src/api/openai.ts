import axios from "axios";

const OPENAI_API_KEY = "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";

export const getWorkoutPlan = async (userData: string) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a fitness trainer." },
          { role: "user", content: userData }
        ],
        max_tokens: 300
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API error:", error);
    return null;
  }
};
