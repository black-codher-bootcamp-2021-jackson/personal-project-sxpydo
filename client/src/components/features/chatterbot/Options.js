import React from "react";
import './Options.css';

const HelpOptions = (props) => {
  const options = [
    { text: "Book a meetup", handler: () => {}, id: 1 },
    { text: "Add/Delete/Edit a Guardian", handler: () => {}, id: 2 },
    { text: "SOS - I need emergency help", handler: () => {}, id: 3 },
    { text: "I need to change my details", handler: () => {}, id: 4 },
    { text: "Planning my journey LIVE", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="help-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="help-options-container">{optionsMarkup}</div>;
};

export default HelpOptions;