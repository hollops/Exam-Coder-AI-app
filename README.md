# 🎓 Exam Coder AI — Decode Your Lecturer's Mind

> **Stop reading everything. Start predicting what comes out.**

Exam Coder AI is a mobile-first web application that uses the **Google Gemini 1.5/2.5 Flash** AI model's 1 million token context window to analyze your lecturer's past question patterns and generate high-probability exam predictions — complete with model answers.

Built for Nigerian university students. Vibe-coded with Antigravity AI.

---

## ✨ What It Does

| Step | Action |
|------|--------|
| 📚 **Feed "The Library"** | Paste your raw lecture notes (up to 500,000 words) |
| 🧠 **Feed "The Style"** | Paste 5–10 past exam questions to teach the AI your lecturer's style |
| ⚡ **Click "Decode Lecturer"** | Gemini AI analyzes the DNA of your lecturer's questions |
| 📋 **Get Your Results** | Receive 20 style-matched predicted questions with detailed model answers |

---

## 🚀 Live Demo

🔗 **[https://exam-coder-ai-app.vercel.app](https://exam-coder-ai-app.vercel.app)**

> **Note:** You will need a free **Google Gemini API key** to use the app.
> Get yours here → [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
> Paste it into the app when prompted. Your key is never stored or sent anywhere except directly to Google's API.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | Angular (Standalone Components + Signals) |
| **Styling** | Tailwind CSS (Dark Mode, Mobile-First) |
| **AI Engine** | Google Gemini 1.5/2.5 Flash — 1M context window |
| **AI SDK** | `@google/generative-ai` |
| **Forms** | Angular Reactive Forms |
| **Build Tool** | Angular CLI + Vite |
| **Hosting** | Vercel |
| **Development** | Antigravity AI (Vibe Coding) |

---

## 💻 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/hollops/Exam-Coder-AI-app.git
cd Exam-Coder-AI-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run start
```

Open your browser at **http://localhost:4200** and enter your Gemini API key to get started.

---

## 🔑 API Key — Privacy & Safety

- Your API key is entered **at runtime in the app UI** — it is never hardcoded or stored in this repository
- The key goes **directly from your browser to Google's API** — no middleman server
- Each user provides their own key (free tier is sufficient for personal use)

---

## 👨‍💻 Built With Vibe Coding

This entire application was scaffolded and refined using **natural language prompts** with the [Antigravity AI](https://antigravity.ai) IDE — a live demonstration of AI-assisted software development for the **GDG Campus** community.

---

## 📄 License

MIT — free to use, modify, and share.
