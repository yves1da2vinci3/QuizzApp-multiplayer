import dotenv from "dotenv";
dotenv.config();
import MistralClient from "@mistralai/mistralai";
import typesMap from "./types.js";

const apiKey = process.env.MISTRAL_API_KEY;
const client = new MistralClient(apiKey);

export async function generateQuiz(type, count = 10) {
  const prompt = `Generate ${count} multiple-choice questions about ${typesMap.get(
    type
  )}. Each question should have 4 options with one correct answer. Format the response as a JSON array of objects, where each object has the following structure:
  {
    "id": number,
    "question": "string",
    "options": ["string", "string", "string", "string"],
    "correctOption": number (0-3)
  }`;
  const startTime = performance.now();

  try {
    const chatResponse = await client.chat({
      model: "mistral-tiny",
      messages: [
        {
          role: "user",
          content: `${prompt}`,
        },
      ],
    });
    const endTime = performance.now();
    const duration = endTime - startTime;

    console.log("Chat:", JSON.parse(chatResponse.choices[0].message.content));
    console.log("Duration:", duration, "milliseconds");

    return JSON.parse(chatResponse.choices[0].message.content);
  } catch (error) {
    console.error("Error generating quiz:", error);
    return null;
  }
}
