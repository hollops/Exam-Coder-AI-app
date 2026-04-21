import { Injectable, signal } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI | null = null;
  
  public isLoading = signal<boolean>(false);
  public error = signal<string | null>(null);
  public examResults = signal<any[]>([]);

  initialize(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateExam(notes: string, pastQuestions: string) {
    if (!this.genAI) {
      this.error.set("API Key not configured. Please initialize.");
      return;
    }
    
    this.isLoading.set(true);
    this.error.set(null);
    this.examResults.set([]);
    
    try {
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.7
        }
      });
      
      const prompt = `
      You are an elite university professor and an advanced exam engine.
      Here are the lecturer's past questions which represent their specific testing style ("DNA"):
      ---
      ${pastQuestions}
      ---
      
      Here are the course notes:
      ---
      ${notes}
      ---
      
      Based STRICTLY on the course notes, generate exactly 20 new high-probability exam questions in the EXACT STYLE of the past questions.
      For each question, provide a detailed "lecturer-tier" model answer based on the notes.
      
      Return ONLY a JSON array of objects, with each object having exactly two keys: "question" and "answer". 
      Output format:
      [
        { "question": "Question text...", "answer": "Answer text..." }
      ]
      `;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const parsed = JSON.parse(text);
      this.examResults.set(parsed);
      
    } catch (err: any) {
      console.error(err);
      this.error.set(err.message || "An unexpected error occurred during context injection or generation.");
    } finally {
      this.isLoading.set(false);
    }
  }
}
