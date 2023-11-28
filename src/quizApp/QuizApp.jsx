import { Axios } from "axios";
import React, { useEffect, useState } from "react";


const questions = [
  {
    question: "Which country drinks the most amount of coffee per person? ",
    answers: [
      { answer: "Finland", isCorrect: true },
      { answer: "Italy", isCorrect: false },
      { answer: "Colombia ", isCorrect: false },
      { answer: "USA", isCorrect: false },
    ],
  },
  {
    question: "What is the most common color of toilet paper in France?",
    answers: [
      { answer: "Pink", isCorrect: true },
      { answer: "White", isCorrect: false },
      { answer: "Blue", isCorrect: false },
      { answer: "Red", isCorrect: false },
    ],
  },
  {
    question: "What color is an airplane’s famous black box?",
    answers: [
      { answer: "Red", isCorrect: false },
      { answer: "Orange", isCorrect: true },
      { answer: "Black", isCorrect: false },
      { answer: "Blue", isCorrect: false },
    ],
  },
  {
    question: "What is the longest word in the English language? ",
    answers: [
      { answer: "Antidisestablishmentarianism", isCorrect: true },
      { answer: "Hippopotomonstrosesquippedaliophobia", isCorrect: false },
      { answer: "Floccinaucinihilipilification", isCorrect: false },
      { answer: "Lituihemaseopersetgsaiuewm", isCorrect: false },
    ],
  },
  {
    question:
      "What is Benedictine monk Dom Pierre Pérignon rumored to have created?",
    answers: [
      { answer: "Tomato ketchup", isCorrect: false },
      { answer: "Wine", isCorrect: false },
      { answer: "French fries", isCorrect: false },
      { answer: "Champagne", isCorrect: true },
    ],
  },
];
function QuizApp() {
  const [correct, setCorrect] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [count,setCount] = useState(1)
  const [color, setColor] = useState();
  const [disabled, setDisabled] = useState(false);
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(30);

  const handleAnswer = (index, decision) => {
    if (decision === true) {
      setColor("bg-green-700");
      setPoints((previous) => previous + 1);
    } else {
      setColor("bg-orange-800");
    }
    setCorrect(correct === index ? null : index);
    setDisabled(true);
  };
  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevCount) => {
        if (prevCount === 0) {
          clearInterval(countdown[0]);
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className="flex bg-blue-300 h-screen justify-center items-center">
      <div className="bg-indigo-950 md:flex flex flex-col gap-9  text-white px-8 py-10">
        <span>Time:{time}sec</span>
        <div className="md:flex flex flex-col gap-20 md:gap-10">
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-2xl">
              Question {count}/{questions.length}
            </p>
            <p className="text-xl">{questions[questionNumber].question}</p>
          </div>
          <div className="grid gap-4">
            {questions[questionNumber].answers.map((item, index) => (
              <p
                key={index}
                onClick={
                  disabled
                    ? () => {}
                    : () => {
                        handleAnswer(index, item.isCorrect);
                        setTime(0);
                      }
                }
                style={{
                  cursor: disabled || time === 0 ? "not-allowed" : "pointer",
                  color: disabled || time === 0 ? "gray" : "",
                }}
                className={
                  correct === index
                    ? `border-blue-700 ${color} border-2 flex items-end rounded-md px-3`
                    : `border-blue-700   border-2 flex items-end  rounded-md px-3`
                }>
                {item.answer}
              </p>
            ))}
            {count <= 4 && (
              <div className="flex gap-5">
                <button
                  className="border-2 bg-green-800 px-3 py-1 rounded-md"
                  onClick={() => {
                    setQuestionNumber(previous=> previous+1);
                    setColor("");
                    setDisabled(false);
                    setCorrect(null);
                    setTime(30);
                    setCount((previous)=> previous + 1)
                  }}>
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <span className="">
          Points: {points}/{questions.length}
        </span>
      </div>
    </div>
  );
}

export default QuizApp;
