
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI features will be unavailable.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSummary = async (title: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "AI Summary generation is unavailable without an API key.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a compelling, SEO-friendly blog post summary for the following title. The summary should be around 1-2 sentences and entice users to read more. Title: "${title}"`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Error generating summary.";
  }
};

export const generateContent = async (title: string, summary: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "AI Content generation is unavailable without an API key.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a blog post content in HTML format based on the following title and summary. The content should be well-structured with paragraphs (<p> tags), and possibly some bold text (<strong> tags) for emphasis. Do not include <html> or <body> tags. Title: "${title}" Summary: "${summary}"`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error generating content.";
  }
};

export const generateAltText = async (title: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "AI Alt Text generation is unavailable without an API key.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a concise and descriptive image alt text for the main feature image of a blog post with the following title. The alt text should be useful for accessibility and SEO. Title: "${title}"`,
    });
    return response.text || "";
  } catch (error) {
    console.error("Error generating alt text:", error);
    return "Error generating alt text.";
  }
};

export const generateSEOData = async (title: string, summary: string): Promise<{ keywords: string, description: string }> => {
  const ai = getAIClient();
  if (!ai) return { keywords: "", description: "" };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Act as an SEO expert. For a blog post titled "${title}" with summary "${summary}", provide 10 high-ranking, long-tail keywords (comma separated) and a highly optimized meta description (max 160 chars).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            keywords: { type: Type.STRING },
            description: { type: Type.STRING }
          },
          required: ["keywords", "description"]
        }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("SEO Generation Error:", error);
    return { keywords: "", description: "" };
  }
};
