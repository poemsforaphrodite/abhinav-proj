import React, { useEffect, useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setIsAtBottom(isBottom);
    setIsVisible(scrolled >= 200 && !isBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`chat-popup ${isVisible ? 'visible' : ''} ${isAtBottom ? 'hidden' : ''}`}>
      <div className="chat-header">
        <h4>Radhika</h4>
        <span>Hey, this is Radhika from ZebLearn - The Rank #1 SAP & HR Live Training Provider in India.</span>
      </div>
      <div className="chat-body">
        <p>I am a Sr. Consultant. We provide industry-class live training on live projects by industry experts in weekdays, weekends, and personalized batches.</p>
        <p>May I know which course you are looking for?</p>
      </div>
      <input type="text" placeholder="Type here and press enter..." />
    </div>
  );
};

export default Chat;
