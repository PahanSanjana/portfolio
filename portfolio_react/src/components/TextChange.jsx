import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi' I'm Sanjana", "Hi' I'm Sanjana", "Hi' I'm Sanjana"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1); // changed from "true" to number
  const [isForward, setIsForward] = useState(true); // changed from "true" to boolean
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // fixed index cycling
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;
