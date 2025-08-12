import React, { useState, useRef, useEffect } from 'react';

const ChatHead = () => (
  <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold text-xs">AI</span>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900 text-sm">AI Assistant</h2>
        <p className="text-xs text-green-500">Online</p>
      </div>
    </div>
    <div className="flex items-center space-x-1">
      <button className="p-1.5 hover:bg-gray-100 rounded-full">
        <span className="text-gray-600 text-sm">📞</span>
      </button>
      <button className="p-1.5 hover:bg-gray-100 rounded-full">
        <span className="text-gray-600 text-sm">📹</span>
      </button>
      <button className="p-1.5 hover:bg-gray-100 rounded-full">
        <span className="text-gray-600 text-sm">⋮</span>
      </button>
    </div>
  </div>
);

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! This is a simulated response from the AI assistant.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: 'Hello, how are you?', emoji: '👋', label: 'Hello' },
    { text: 'Can you help me with...', emoji: '❓', label: 'Help' },
    { text: 'Thank you!', emoji: '🙏', label: 'Thanks' },
    { text: 'What can you do?', emoji: '🤖', label: 'Features' }
  ];

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden'
    }} className="bg-white">
      
      {/* Chat Header */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        zIndex: 10
      }}>
        <ChatHead />
      </div>

      {/* Messages Container */}
      <div style={{
        position: 'absolute',
        top: '60px',
        left: 0,
        right: 0,
        bottom: '140px',
        overflowY: 'auto',
        overflowX: 'hidden'
      }} className="bg-gray-50">
        
        <div className="p-4 space-y-4" style={{ minHeight: '100%' }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex flex-col" style={{ maxWidth: '70%' }}>
                <div
                  className={`px-4 py-3 rounded-2xl shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                  }`}
                  style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <span
                  className={`text-xs mt-1 px-2 ${
                    message.sender === 'user' 
                      ? 'text-gray-400 text-right' 
                      : 'text-gray-400 text-left'
                  }`}
                >
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                <div className="flex space-x-1 items-center">
                  <span className="text-sm text-gray-500 mr-2">AI is typing</span>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '140px',
        zIndex: 10
      }} className="border-t border-gray-200 bg-white">
        
        <div className="p-4 h-full flex flex-col justify-between">
          {/* Quick Actions */}
          <div className="flex gap-2 mb-3 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(action.text)}
                className="flex-shrink-0 inline-flex items-center space-x-1 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                <span>{action.emoji}</span>
                <span>{action.label}</span>
              </button>
            ))}
          </div>

          {/* Message Input Row */}
          <div className="flex items-center space-x-3">
            {/* Attachment Button */}
            <button className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full">
              <span className="text-gray-500 text-lg">📎</span>
            </button>

            {/* Message Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                style={{ maxWidth: '100%' }}
              />
              
              {/* Emoji Button */}
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full">
                <span className="text-gray-500 text-lg">😊</span>
              </button>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={inputMessage.trim() === ''}
              className={`flex-shrink-0 w-12 h-12 rounded-full transition-all duration-200 ${
                inputMessage.trim() === ''
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-lg">➤</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;