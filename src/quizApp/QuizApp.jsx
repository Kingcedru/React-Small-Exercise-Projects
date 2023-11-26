import { Axios } from "axios";
import React, { useEffect, useState } from "react";

function QuizApp() {
    const [correct,setCorrect] = useState(null)
    const [questionNumber, setQuestionNumber] = useState(0);
    const [color,setColor] = useState('')
    const [disabled,setDisabled] = useState(false)

    const handleAnswer = (index,decision)=>{
      if(decision == true){
        setColor('green')
      }
      if(decision == false){
        setColor('red')
      }
      setCorrect(correct === index?null:index)
      setDisabled(true)
    }

  const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { answer: "Kigali", isCorrect: false },
        { answer: "Paris", isCorrect: true },
        { answer: "Kampala", isCorrect: false },
        { answer: "Nairobi", isCorrect: false },
      ],
    },
    {
      question: "What country hosted the Fifa World Cup in 1998?",
      answers: [
        { answer: "USA", isCorrect: false },
        { answer: "Japan", isCorrect: false },
        { answer: "France", isCorrect: true },
        { answer: "Germany", isCorrect: false },
      ],
    },
  ];
  return (
    <div className="flex bg-blue-300 h-screen justify-center items-center">
      <div className="bg-indigo-950 flex h-64 gap-10 w-fit text-white px-8 py-5">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-2xl">Question {questionNumber+1}/4</p>
          <p className="text-xl">{questions[questionNumber].question}</p>
        </div>
        <div className="grid gap-4">
          {questions[questionNumber].answers.map((item, index) => (
            <p
              key={index} onClick={disabled?()=>{}:()=>handleAnswer(index,item.isCorrect)} style={{
                cursor: disabled ? 'not-allowed' : 'pointer',
                color: disabled? 'gray' : '',
              }}
              className={correct === index?`border-blue-700 bg-${color}-800  border-2 flex items-end w-48 rounded-md px-3`:`border-blue-700  border-2 flex items-end w-48 rounded-md px-3`}>
              {item.answer}
            </p>
          ))}
          <div className="flex gap-5">
            <button className="border-2 bg-green-800 px-3 py-1 rounded-md" onClick={()=>{setQuestionNumber(previous=>previous+1)}}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizApp;
