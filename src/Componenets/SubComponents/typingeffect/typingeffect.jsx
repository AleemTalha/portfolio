import React, { useState, useEffect } from "react";
import "./typereffect.css";

const TypingEffect = () => {
  const texts = [
    "Passionate About Code",
    "Building Web Solutions",
    "Crafting Scalable Code",
    "Turning Ideas Into Reality",
    "One Line of Code at a Time",
    "Solving Problems with Code",
    "Innovative Developer"
  ];
  

  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const typeText = () => {
      const str = texts[textIndex];
      if (charIndex < str.length && !isRemoving) {
        setCurrentText((prevText) => prevText + str[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else if (charIndex === str.length && !isRemoving) {
        setTimeout(() => {
          setIsRemoving(true);
        }, 3000); 
      }
    };

    const removeText = () => {
      const str = texts[textIndex];
      if (charIndex > 0 && isRemoving) {
        setCurrentText(str.slice(0, charIndex - 1));
        setCharIndex((prevIndex) => prevIndex - 1);
      } else if (charIndex === 0 && isRemoving) {
        setIsRemoving(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Go to next text
        setTimeout(() => {
          typeText(); 
        }, 500);
      }
    };

    if (isRemoving) {
      const removingInterval = setTimeout(removeText, 100);
      return () => clearTimeout(removingInterval);
    } else {
      const typingInterval = setTimeout(typeText, 200);
      return () => clearTimeout(typingInterval);
    }
  }, [charIndex, currentText, textIndex, isRemoving, texts]);

  return (
    <div className="typed-text">
      <span className="bi bi-keyboard" style={{color:"yellow"}}> &nbsp;</span>
      {  currentText}
      <span className="bi bi-cursor-text blink"></span>
    </div>
  );
};

export default TypingEffect;
