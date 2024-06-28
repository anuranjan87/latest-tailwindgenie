// app/api/thread/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
  try {
    const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY || '', dangerouslyAllowBrowser: true });

    const threadI = await openai.beta.threads.create({});

    return NextResponse.json({ threadId: threadI.id }, { status: 200 });
  } catch (error) {
    console.error('Error creating thread:', error);
    return NextResponse.json({ error: 'Error creating thread' }, { status: 500 });
  }
}
