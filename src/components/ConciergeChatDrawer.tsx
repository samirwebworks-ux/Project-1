import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Palmtree, User, Bot, Clock, HelpCircle, Phone } from 'lucide-react';
import { RESORT_INFO, ROOMS_DATA } from '../data/resortData';

interface ConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

interface Message {
  id: string;
  sender: 'concierge' | 'user';
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: () => void }[];
}

export const ConciergeChatDrawer: React.FC<ConciergeDrawerProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'concierge',
      text: "Warm greetings! I am Laurent, your Ocean Haven virtual concierge. How may I assist with your Key West stay, dining reservations, or custom island itinerary today?",
      timestamp: 'Just now',
      quickActions: [
        { label: 'Check Room Rates', action: () => onOpenBooking() },
        { label: 'Best Sunset Spot', action: () => handleSendPreset('Where is the best spot to watch the Key West sunset?') },
        { label: 'Spa Treatments', action: () => handleSendPreset('What spa treatments do you recommend?') },
        { label: 'Airport Transfers', action: () => handleSendPreset('How far is the resort from Key West Airport?') }
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSendPreset = (prompt: string) => {
    processUserMessage(prompt);
  };

  const processUserMessage = (userText: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = "I would be delighted to arrange that for you. Our guest relations team is at your disposal.";
      const lower = userText.toLowerCase();

      if (lower.includes('sunset') || lower.includes('mallory')) {
        reply = "For sunset, nothing rivals our private Oceanfront Pier and Sol & Sand Lounge! We also provide complimentary sunset bicycle rentals to historic Mallory Square (10 minutes ride).";
      } else if (lower.includes('room') || lower.includes('rate') || lower.includes('suite') || lower.includes('villa')) {
        reply = `We feature 4 signature accommodation tiers ranging from our Ocean View Rooms ($450/night) to our Royal Sunset Penthouse ($1,450/night). Direct bookings receive complimentary breakfast and a $50 dining voucher!`;
      } else if (lower.includes('spa') || lower.includes('massage')) {
        reply = "Haven Spa offers botanical open-air therapies! We especially recommend the 'Haven Signature Coastal Massage' (80 min • $240) and our couple's 'Key West Sunset Ritual'.";
      } else if (lower.includes('airport') || lower.includes('distance') || lower.includes('flight')) {
        reply = "Key West International Airport (EYW) is just 3.2 miles away (approximately 8 minutes by car). We offer complimentary executive SUV transfers for all Villa & Penthouse suites!";
      } else if (lower.includes('dining') || lower.includes('food') || lower.includes('dinner') || lower.includes('restaurant')) {
        reply = "Azure Horizon serves fine Key West seafood & steaks directly overlooking the water (7:00 AM – 10:30 PM). Would you like me to open the table reservation system?";
      } else if (lower.includes('check in') || lower.includes('check-in') || lower.includes('time')) {
        reply = "Check-in begins at 4:00 PM and check-out is at 11:00 AM. Direct bookings receive priority complimentary late check-out upon request!";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'concierge',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 900);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    processUserMessage(text);
  };

  return (
    <div
      id="concierge-chat-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        id="concierge-chat-drawer"
        className="bg-[#faf8f5] w-full max-w-md h-full flex flex-col shadow-2xl border-l border-[#e8e2d8] relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-[#152220] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#253935]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#1b2826] border border-[#dfc19c] flex items-center justify-center text-[#dfc19c]">
                <Palmtree className="w-5 h-5" />
              </div>
              <span className="w-3 h-3 rounded-full bg-green-500 border-2 border-[#152220] absolute bottom-0 right-0" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">Haven Concierge</h4>
              <p className="text-[10px] text-[#dfc19c] uppercase tracking-wider">Live Island Assistant • 24/7</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
          {messages.map((msg) => {
            const isConcierge = msg.sender === 'concierge';
            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${isConcierge ? 'items-start' : 'items-end justify-end'}`}
              >
                {isConcierge && (
                  <div className="w-7 h-7 rounded-full bg-[#1b2826] text-[#dfc19c] flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[82%] rounded-2xl p-3.5 shadow-sm ${
                  isConcierge
                    ? 'bg-white text-[#1b2826] border border-[#e8e2d8] rounded-tl-sm'
                    : 'bg-[#1b2826] text-[#dfc19c] rounded-tr-sm'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>
                  <span className={`text-[9px] mt-1.5 block ${isConcierge ? 'text-[#8e9f9b]' : 'text-white/60'}`}>
                    {msg.timestamp}
                  </span>

                  {/* Quick action buttons if provided */}
                  {msg.quickActions && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-[#f1ede6]">
                      {msg.quickActions.map((qa, i) => (
                        <button
                          key={i}
                          onClick={qa.action}
                          className="px-2.5 py-1 rounded-full bg-[#f5f0ea] hover:bg-[#e8e2d8] text-[#1b2826] font-semibold text-[10px] transition-colors"
                        >
                          {qa.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {!isConcierge && (
                  <div className="w-7 h-7 rounded-full bg-[#dfc19c] text-[#152220] flex items-center justify-center flex-shrink-0 mb-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#6b7c77]">
              <div className="w-6 h-6 rounded-full bg-[#1b2826] text-[#dfc19c] flex items-center justify-center">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="italic">Laurent is curating your response...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Call Option Banner */}
        <div className="px-4 py-2 bg-[#f1ede6] border-t border-[#e2dad0] flex items-center justify-between text-[11px] text-[#6b7c77]">
          <span>Prefer to speak directly?</span>
          <a href={`tel:${RESORT_INFO.phone}`} className="font-bold text-[#1b2826] hover:text-[#c5a072] flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#c5a072]" />
            <span>(305) 555-0123</span>
          </a>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleFormSubmit} className="p-3 bg-white border-t border-[#e8e2d8] flex gap-2">
          <input
            type="text"
            placeholder="Ask about rooms, sunsets, dining, spa..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 px-3.5 py-2 text-xs rounded-lg border border-[#d3cbbe] bg-[#faf8f5] focus:outline-none focus:border-[#1b2826]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#1b2826] hover:bg-[#253935] text-[#dfc19c] rounded-lg text-xs font-bold transition-colors flex items-center justify-center"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
