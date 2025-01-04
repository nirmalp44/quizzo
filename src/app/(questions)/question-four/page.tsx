"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";
import { useDispatch } from "react-redux";
import { saveAnswer } from "@/state/question/questionSlice";

const QuestionFour: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };

  const handleContinue = () => {
    if (selectedAnswer) {
      dispatch(
        saveAnswer({
          id: 4,
          question: "Who was the first President of the United States?",
          selectedAnswer,
          correctAnswer: "George Washington ",
        })
      );
      router.push("/question-five");
    }
  };

  return (
    <QuestionWrapper
      question="Who was the first President of the United States?"
      answers={["Abraham Lincoln", "Thomas Jefferson", "George Washington ", "John Adams"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={handleContinue}
    />
  );
};

export default QuestionFour;