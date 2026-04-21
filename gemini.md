
1. Executive Summary
A specialized web application that leverages the Gemini 1.5/2.5 Flash 1M context window to simulate university exams. It analyzes the "DNA" of a lecturer's past questions and applies it to new course materials to generate high-probability exam predictions and model answers.
2. Target Audience
Primary: Nigerian public university students (Mobile-first, data-conscious).
Secondary: GDG Campus members looking to see "Vibe Coding" in action.

3. Core Features (The "Build" Scope)
Feature
Description
Tech Component
Context Injection
User pastes raw lecture notes (up to 500k words).
Angular ReactiveForms
Style Patterning
User pastes 5-10 past questions to "train" the style.
Gemini System Instruction
Exam Generation
One-click generation of 20 style-matched Q&As.
Gemini API (Flash)
Mobile-First UI
Clean, dark-mode interface optimized for cheap Androids.
Tailwind CSS / Angular
Vibe Coding Flow
Entire app scaffolded & refined via natural language.
Antigravity AI Agent


4. User Flow
Launch: Student opens the web app on their phone/laptop.
Input: Pastes notes into "The Library" and past questions into "The Style."
Process: Clicks "Decode Lecturer".
Output: Receives a numbered list of 20 questions with "Lecturer-tier" answers and source references.
Study: Uses the output as a primary study guide.
5. Technical Architecture
Frontend: Angular (Standalone Components, Signals for state).
AI Engine: Google Gemini API.
Orchestration: Antigravity IDE (Manager Agent mode) to write, test, and run the app.
