import React, { useState } from "react";
import "./AskQuestion.css";

const Accordion = () => {
  const [items, setItems] = useState([
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces.", isOpen: false },
    { question: "What is a component?", answer: "A component is a reusable piece of UI in React.", isOpen: false },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const toggleItem = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : item.isOpen,
      }))
    );
  };

  const addNewItem = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setItems([...items, { question: newQuestion, answer: newAnswer, isOpen: false }]);
      setNewQuestion("");
      setNewAnswer("");
    }
  };

  return (
    <div className="accordion-container">
      <h1>FAQ</h1>
      <div className="accordion">
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-question"
              onClick={() => toggleItem(index)}
            >
              {item.question}
              <span>{item.isOpen ? "-" : "+"}</span>
            </div>
            {item.isOpen && <div className="accordion-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
      <div className="add-item">
        <input
          type="text"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <textarea
          placeholder="Enter answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        ></textarea>
        <button onClick={addNewItem}>Add Q&A</button>
      </div>
    </div>
  );
};

export default Accordion;
