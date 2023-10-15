import React, { useState } from "react";

function WordCounter() {
  const divStyle = {
    display: "inline-block",
    border: "1px solid #ccc",
    color: "light",
    margin: "10% 31%",
    padding: "6px",
    boxShadow:
      "5px 5px 5px rgba(0, 0, 0, 0.5), -5px -5px 5px rgba(0, 0, 0, 0.5)",
  };
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.split(/\s+/).filter((word) => word !== "").length;

  return (
    <div style={divStyle} className="text-center">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type your text here..."
        rows="6"
        cols="50"
        value={text}
        onChange={handleTextChange}
      />
      <p>
        Word Count: <strong>{wordCount}</strong>
      </p>
    </div>
  );
}

export default WordCounter;
