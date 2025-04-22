'use client';

import React, { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Initialize messages after component mounts to avoid hydration mismatch
        setMessages([
            { 
                id: 1, 
                text: "Hi! 👋 I'm Dev's AI assistant. How can I help you today?", 
                sender: "bot", 
                timestamp: new Date()
            }
        ]);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || isLoading) return;

        const userMessage = {
            id: messages.length + 1,
            text: newMessage,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setNewMessage('');
        setIsLoading(true);

        try {
            console.log('Sending message to API...'); // Debug log
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [
                        ...messages.map(msg => ({
                            role: msg.sender === 'user' ? 'user' : 'assistant',
                            content: msg.text
                        })),
                        { role: 'user', content: userMessage.text }
                    ]
                })
            });

            const data = await response.json();
            console.log('API Response:', data); // Debug log

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get response');
            }

            setMessages(prev => [...prev, {
                id: prev.length + 1,
                text: data.message,
                sender: "bot",
                timestamp: new Date()
            }]);
        } catch (error) {
            console.error('Detailed Chat Error:', {
                message: error.message,
                name: error.name,
                stack: error.stack
            }); // More detailed error logging
            
            let errorMessage = error.message;
            if (error.message.includes('Failed to fetch')) {
                errorMessage = "Network error: Please check your internet connection.";
            }
            
            setMessages(prev => [...prev, {
                id: prev.length + 1,
                text: errorMessage,
                sender: "bot",
                timestamp: new Date()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                    isOpen ? 'hidden' : 'flex'
                } items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
            </button>

            {/* Chat Window */}
            <div className={`${
                isOpen ? 'flex' : 'hidden'
            } flex-col w-80 h-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden`}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-500 to-violet-500">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">DR</span>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">Dev's AI Assistant</h3>
                            <p className="text-white/80 text-sm">Ask me anything about Dev's work!</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                        >
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                message.sender === 'user' 
                                    ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white'
                                    : 'bg-white shadow-md text-gray-800'
                            }`}>
                                <p className="text-sm">{message.text}</p>
                                <p className="text-xs mt-1 opacity-70">
                                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start mb-4">
                            <div className="bg-white shadow-md rounded-2xl px-4 py-2">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Ask me anything..."
                            disabled={isLoading}
                            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-cyan-500 text-sm disabled:bg-gray-50"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatWidget; 