export const faqs = [
  {
    question: "Do I need an account?",
    answer:
      "No. There is no Waffler account. Download the app, set your API key in the .env file, and you're done.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes — Waffler itself is free and open source (MIT licensed). You pay OpenAI or Groq directly for API usage at their standard rates, roughly $0.006 per minute with OpenAI Whisper, often cheaper with Groq.",
  },
  {
    question: "Is my data private?",
    answer:
      "Audio goes to OpenAI or Groq under your own API key — Waffler's servers are never in the loop. Your transcription history is stored locally on your machine only and never leaves your device.",
  },
  {
    question: "What's the difference between OpenAI and Groq?",
    answer:
      "Both work well. Groq is generally faster and often cheaper. OpenAI Whisper is more widely used and well-documented. Set whichever API key you already have in the .env file — you can switch at any time.",
  },
  {
    question: "Why does it warn about an unidentified developer / unsafe app?",
    answer:
      "Waffler builds are unsigned — code signing certificates cost money and this is a free indie project. On Mac, right-click the app and choose Open to bypass Gatekeeper. On Windows, click More Info then Run Anyway to get past SmartScreen. This is normal for unsigned open-source software.",
  },
  {
    question: "Mac or Windows?",
    answer:
      "Both are supported. Separate installers are available on the GitHub releases page at github.com/jbf-tars/waffler/releases.",
  },
];
