import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Validate OpenAI API key
if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
    throw new Error('OPENAI_API_KEY is not properly configured');
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: 'Invalid messages format' },
                { status: 400 }
            );
        }

        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are a helpful assistant for Dev Rathore's portfolio website. 
                    You can help visitors with:
                    - Information about Dev's skills and experience
                    - Details about his projects and services
                    - How to contact him
                    - Questions about web development
                    Keep responses concise, friendly, and professional.
                    If asked about availability or hiring, encourage them to use the contact form.`
                },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 200
        });

        return NextResponse.json({
            message: chatCompletion.choices[0].message.content
        });
    } catch (error) {
        console.error('OpenAI API Error:', error);
        
        // More specific error messages based on the error type
        if (error.code === 'invalid_api_key') {
            return NextResponse.json(
                { error: 'Invalid OpenAI API key. Please check your configuration.' },
                { status: 401 }
            );
        } else if (error.code === 'rate_limit_exceeded') {
            return NextResponse.json(
                { error: 'Rate limit exceeded. Please try again later.' },
                { status: 429 }
            );
        }

        return NextResponse.json(
            { error: error.message || 'There was an error processing your request' },
            { status: 500 }
        );
    }
} 