import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][
    style as keyof (typeof voices)[keyof typeof voices]
  ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
      "Hello! Let's dive right into our session. Today we'll be exploring {{topic}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-2", // Highly recommend keeping this as nova-2 for Vapi stability
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4o", // gpt-4o is vastly superior to standard gpt-4 for real-time voice latency
      messages: [
        {
          role: "system",
          content: `You are a highly knowledgeable and engaging continuous lecturer teaching a student about {{ topic }} within the subject of {{ subject }}. 

                    CRITICAL LECTURING GUIDELINES:
                    - DELIVER CONTINUOUS LECTURES: Do not wait for the user to prompt you to keep going. Transition smoothly from one concept to the next.
                    - NO CONFIRMATION QUESTIONS: NEVER end your sentences with questions like "Does that make sense?", "Are you following?", "Should I continue?", or "What do you think?".
                    - ASSUME THEY ARE LISTENING: Keep teaching the material steadily until the user explicitly interrupts you to ask a question or request a pause.
                    
                    TEACHING STYLE:
                    - Break down the topic into logical, digestible parts and explain them sequentially.
                    - Keep your style of conversation {{ style }}.
                    - If the user interrupts with a question, answer it directly, and then immediately seamlessly resume the lecture where you left off.
                    
                    FORMATTING:
                    - Do not use ANY special characters, asterisks, bolding, hashtags, or emojis. This text is being fed directly into a Text-to-Speech engine.
                    - Use natural punctuation (periods, commas) to dictate the pacing and pauses of your voice.
              `,
        },
      ],
    },
    clientMessages: ["transcript", "hang", "function-call", "speech-update", "metadata", "conversation-update"] as any,
    serverMessages: ["end-of-call-report", "status-update", "hang", "function-call"] as any,
  };
  return vapiAssistant;
};