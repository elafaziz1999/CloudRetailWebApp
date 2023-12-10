import React, { useState } from 'react';
import './CSS/FAQ.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq">
      <br />
      <h3 onClick={toggleOpen}>{question}</h3>
      {isOpen && <p>{answer}</p>}
      <br />
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    { question: 'What is CloudRetail?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit purus, ultrices nec felis vel, molestie consequat arcu. Quisque nec purus a elit placerat ornare. Etiam facilisis vulputate velit, eget mattis dui dictum eget. Phasellus et leo sit amet ante pulvinar imperdiet. Aenean leo justo, porttitor a consectetur quis, varius quis arcu. Sed id erat porttitor, dictum enim vel, condimentum nulla. Aenean viverra lectus id purus ornare facilisis. Sed libero purus, aliquet quis urna nec, molestie vulputate metus.' },
    { question: 'How to place order?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit purus, ultrices nec felis vel, molestie consequat arcu. Quisque nec purus a elit placerat ornare. Etiam facilisis vulputate velit, eget mattis dui dictum eget. Phasellus et leo sit amet ante pulvinar imperdiet. Aenean leo justo, porttitor a consectetur quis, varius quis arcu. Sed id erat porttitor, dictum enim vel, condimentum nulla. Aenean viverra lectus id purus ornare facilisis. Sed libero purus, aliquet quis urna nec, molestie vulputate metus.' },
    { question: 'How to contact us?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit purus, ultrices nec felis vel, molestie consequat arcu. Quisque nec purus a elit placerat ornare. Etiam facilisis vulputate velit, eget mattis dui dictum eget. Phasellus et leo sit amet ante pulvinar imperdiet. Aenean leo justo, porttitor a consectetur quis, varius quis arcu. Sed id erat porttitor, dictum enim vel, condimentum nulla. Aenean viverra lectus id purus ornare facilisis. Sed libero purus, aliquet quis urna nec, molestie vulputate metus.' },
    // Add more FAQ items as needed
  ];

  return (
    <div className="page">
      <br />
      <br />
      <h1>
        <center>Frequently Asked Questions (FAQs)</center>
      </h1>
      <br/>
      <h2>
        <center>Click on each question to view the answer</center>
      </h2>
      <br />
      {faqData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
