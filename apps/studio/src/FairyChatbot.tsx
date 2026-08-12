import React, { useEffect, useState } from "react";
import { talkToFairy } from "./fairy";


type TrailPoint = { id: number; x: number; y: number };

export default function FairyChatbot() {
  const [target, setTarget] = useState({ x: 300, y: 300 });
  const [position, setPosition] = useState({ x: 300, y: 300 });
  const [open, setOpen] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  const [messages, setMessages] = useState([
  { from: "fairy", text: "Hi, I’m Fairy — a light inside the Magic2U Cloud." }
  ]);

  const [input, setInput] = useState("");

  async function sendMessage() {
  if (!input.trim()) return;

  const userText = input;
  setMessages(prev => [...prev, { from: "user", text: userText }]);
  setInput("");

  try {
    const reply = await talkToFairy(userText);

    setMessages(prev => [...prev, { from: "fairy", text: reply }]);

    const utter = new SpeechSynthesisUtterance(reply);
    utter.rate = 1.1;
    utter.pitch = 1.4;
    speechSynthesis.speak(utter);

  } catch (err) {
    setMessages(prev => [
      ...prev,
      { from: "fairy", text: "Hmm… I'm going to need you to believe in the magic more than that!" }
    ]);
  }
}



  // Track mouse movement
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Smooth delayed movement + trail
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const next = {
          x: prev.x + (target.x - prev.x) * 0.02,
          y: prev.y + (target.y - prev.y) * 0.02,
        };

        // Sparkle trail
        setTrail((t) =>
          [...t, { id: Math.random(), x: next.x, y: next.y }].slice(-20)
        );

        return next;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <>
      {/* Sparkle Trail */}
      {trail.map((p) => (
        <div
          key={p.id}
          className="fairy-trail"
          style={{ left: p.x, top: p.y }}
        />
      ))}

      {/* Fairy */}
      <div
        className="fairy"
        style={{ left: position.x, top: position.y }}
        onClick={() => setOpen(!open)}
      >
        <div className="fairy-glow" />
        <div className="fairy-core" />
        <div className="fairy-sparkle sparkle1" />
        <div className="fairy-sparkle sparkle2" />
        <div className="fairy-sparkle sparkle3" />
      </div>

      {/* Chat Bubble */}
     {open && (
        <div
          className="fairy-chat"
          style={{ left: position.x, top: position.y }}
        >
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>
      
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What would you like to do?"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
