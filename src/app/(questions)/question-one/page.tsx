"use client";
import React, { useState } from "react";

import AnswerButton from "@/components/answer-button";
import { useRouter } from "next/navigation";

const QuestionOne: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const route = useRouter();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };

  const answers = ["France", "Germany", "Portugal", "Spain"];
  const options = ["A", "B", "C", "D"]; // Letters for the answers

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-xl font-semibold mb-6 text-center">
          Who won the FIFA World Cup in 2018?
        </h1>
        <div className="space-y-4">
          {answers.map((answer, index) => (
            <AnswerButton
              key={answer}
              answer={answer}
              isSelected={selectedAnswer === answer}
              option={options[index]}
              onClick={() => handleAnswerClick(answer)}
            />
          ))}
        </div>
        <div className="mt-6">
          <button
            className={`w-full bg-[#FB2E86] text-white font-bold py-2 rounded-md hover:bg-[#dd2a77] transition ${!selectedAnswer && "opacity-50 cursor-not-allowed"
              }`}
            disabled={!selectedAnswer}
            onClick={() => {
              route.push("/question-two");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;