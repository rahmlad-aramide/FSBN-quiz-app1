import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

const Question = ({ question, totalQuestions, currentQuestion, setAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function goToNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  }

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(goToNextQuestion, 10 * 1000); //10 seconds duration
    return goToNextQuestion;
  }, [question]);

  return (
    <div className="question">
      <div className="progress-bar absolute top-0" ref={progressBar}></div>
      <div className="question-count flex justify-center m-2 p-2">
        <b className="mx-2 text-black/50">{currentQuestion}</b>
        of
        <b className="mx-2 text-black/50">{totalQuestions}</b>
      </div>
      <div className="main flex flex-col items-center">
        <div className="title flex flex-col w-[95%] mx-auto">
            <p className="font-bold text-black/50 text-xl">Question:</p>
          <h2 className="font-bold text-black/80">{question.title}</h2>
        </div>
        <div className="options w-[95%] mb-4: flex flex-col">
          {question.options.map((option, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelectedOption(index)}
                className={
                  index === selectedOption
                    ? "option active border bg-[#1428cd] hover:scale-[.99] text-white rounded p-2 m-2 cursor-pointer"
                    : "option border p-2 m-2 rounded hover:scale-[.99] cursor-pointer"
                }
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="control border-t-2 flex justify-end items-end">
        <button onClick={goToNextQuestion} className="button mt-2 mr-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
