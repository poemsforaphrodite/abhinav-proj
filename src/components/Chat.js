import React from 'react';
import './Chat.css';

const Chat = () => {
  return (
    <div className="chat-popup">
      <div className="chat-header">
        <h4>Radhika</h4>
        <span>Hey this is Radhika from ZebLearn- The Rank #1 SAP & HR Live Training Provider in India.</span>
      </div>
      <div className="chat-body">
        <p>I am Sr. Consultant, We provide Industry class Live Training on Live projects by industry Experts in WeekDays, Weekend & Personalised Batches.</p>
        <p>May I know Which Course You are looking?</p>
      </div>
      <input type="text" placeholder="Type here and press enter..." />
    </div>
  );
};

export default Chat;
