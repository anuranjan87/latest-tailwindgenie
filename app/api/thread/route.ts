// pages/api/thread.ts
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const createThread = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY || '', dangerouslyAllowBrowser: true });

    const threadI = await openai.beta.threads.create({});

    res.status(200).json({ threadId: threadI.id });
  } catch (error) {
    console.error('Error creating thread:', error);
    res.status(500).json({ error: 'Error creating thread' });
  }
};

export default createThread;
