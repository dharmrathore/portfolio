import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Define fallback responses
const fallbackResponses = {
    greeting: "Hello! I'm Dev's AI assistant. I can tell you about Dev's experience, skills, and projects.",
    experience: `I have experience in:
    - Full Stack Development
    - React.js and Next.js
    - Node.js and Express
    - API Development
    - UI/UX Design`,
    education: `My educational background includes:
    - Computer Science background
    - Web Development specialization
    - Continuous learning and certifications`,
    skills: `My key skills include:
    - Frontend: React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3
    - Backend: Node.js, Express, Python
    - Databases: MongoDB, MySQL
    - Tools: Git, Docker, AWS
    - UI/UX Design principles`,
    projects: `I've worked on several notable projects:
    - Portfolio Website with Next.js
    - E-commerce platforms
    - Content Management Systems
    - Custom Web Applications`,
    contact: "You can contact me through the contact form on this website or via email.",
    default: "I can help you learn more about Dev's experience, skills, projects, or how to get in touch."
};

export async function POST(req) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { message: fallbackResponses.greeting },
                { status: 200 }
            );
        }

        // Get the last user message
        const userMessage = messages[messages.length - 1].content.toLowerCase();

        // Check if OpenAI API is available and not rate limited
        if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
            // Use fallback responses
            let response = fallbackResponses.default;

            if (userMessage.includes('experience')) {
                response = fallbackResponses.experience;
            } else if (userMessage.includes('education')) {
                response = fallbackResponses.education;
            } else if (userMessage.includes('skills')) {
                response = fallbackResponses.skills;
            } else if (userMessage.includes('projects')) {
                response = fallbackResponses.projects;
            } else if (userMessage.includes('contact')) {
                response = fallbackResponses.contact;
            } else if (userMessage.includes('hi') || userMessage.includes('hello')) {
                response = fallbackResponses.greeting;
            }

            return NextResponse.json({ message: response });
        }

        // If OpenAI API is available, try to use it
        try {
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY
            });

            const chatCompletion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: `You are a helpful assistant for Dev's portfolio website. 
                        Use this information to answer questions:
                        ${fallbackResponses.experience}
                        ${fallbackResponses.education}
                        ${fallbackResponses.skills}
                        ${fallbackResponses.projects}
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
        } catch (openaiError) {
            // If OpenAI fails, fall back to local responses
            console.error('OpenAI Error:', openaiError);
            let response = fallbackResponses.default;

            if (userMessage.includes('experience')) {
                response = fallbackResponses.experience;
            } else if (userMessage.includes('education')) {
                response = fallbackResponses.education;
            } else if (userMessage.includes('skills')) {
                response = fallbackResponses.skills;
            } else if (userMessage.includes('projects')) {
                response = fallbackResponses.projects;
            } else if (userMessage.includes('contact')) {
                response = fallbackResponses.contact;
            }

            return NextResponse.json({ message: response });
        }
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { message: "I'm here to help! Ask me about Dev's experience, skills, or projects." },
            { status: 200 }
        );
    }
} 