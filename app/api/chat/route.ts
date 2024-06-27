import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { AssistantResponse, AssistantMessage, DataMessage } from 'ai';
import { Threads } from 'openai/resources/beta/threads/threads';
import { NextApiRequest, NextApiResponse } from 'next';
import { Messages } from 'openai/resources/beta/threads/messages';

interface Messagedd {
  role: string;
  content: { text: { value: string } }[];
  // Add other properties if necessary
}

interface CreatedMessage {
  id: string;
  // Add other properties if necessary
}

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: 'sk-proj-Rw5cfguNZkluGx94oxQIT3BlbkFJOckuea5QLNP2MD08Niyq' || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request, res: NextApiResponse) {
  // Extract the `prompt` from the body of the request
  const { message, model, content, id, threadId } = await req.json();
  console.log(threadId);
  console.log(id);

  let tailwindCSSLink: string;
  if (id) {
    tailwindCSSLink = 'use uploaded image, Output only the tailwind cdn code and HTML code without Markdown syntax or additional formatting, hover effect. Add comments also in the code. All designs should be elegant and impressive';
  } else {
    tailwindCSSLink = 'Output only the tailwind cdn code and HTML code without Markdown syntax or additional formatting, hover effect. Add comments also in the code. All designs should be elegant and impressive';
  }
  const fullMessage = `${tailwindCSSLink}\n${message}`;
  
  const threadI = threadId;
  console.log(threadI);

  let createdMessage: CreatedMessage;
  if (id) {
    
    createdMessage = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: [
        { type: "text", text: fullMessage },
        { type: "image_file", image_file: { file_id: id } }
      ],
    });
  } else {
    createdMessage = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: fullMessage,
    }) as CreatedMessage;
  }
console.log(createdMessage)
  return AssistantResponse(
    { threadId: threadI, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      let finalText = "";
      let citations: string[] = [];

      const runStream = openai.beta.threads.runs.stream(threadI, {
        assistant_id: 'asst_kpGkkuylXDvYGGIEpSQTWM1d',
        stream: true,
        truncation_strategy: { type: 'last_messages', last_messages: 5 }
      });

      let textDonePromise = new Promise<void>((resolve) => {
        runStream.on(
          "textDone",
          async (text: OpenAI.Beta.Threads.Messages.Text) => {
            resolve();
          },
        );
      });

      await forwardStream(runStream);
      await textDonePromise;
    },
  );
}
