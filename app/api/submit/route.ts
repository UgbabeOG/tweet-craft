import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_AI_API_KEY || "";
if (!API_KEY) {
  throw new Error(
    "GEMINI_AI_API_KEY is not set in your environment variables."
  );
}

export async function POST(req: Request) {
  try {
    const { description } = await req.json();

    if (!description) {
      return NextResponse.json(
        { error: "Description is required." },
        { status: 400 }
      );
    }
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    //test
    const prompt = `Generate twitter tweet based on this description: ${description}`;
    const result = await model.generateContent([prompt]);

    //test result

    console.log("Generative API result:", result);

    if (result && result.response) {
      const generatedText = await result.response.text();
      return NextResponse.json({ tweet: generatedText });
    } else {
      throw new Error("No response received from model.");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error generating tweet:", error.message, error.stack);
      return NextResponse.json(
        {
          error: "Failed to generate tweet",
          details: (error as Error).message,
        },
        { status: 500 }
      );
    } else {
      console.error("Error generating tweet:", error);
      return NextResponse.json(
        { error: "Failed to generate tweet", details: "Unknown error" },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to generate tweet", details: (error as Error).message },
      { status: 500 }
    );
  }
}
