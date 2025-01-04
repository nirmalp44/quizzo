"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";
import { useDispatch } from "react-redux";
import { saveAnswer } from "@/state/question/questionSlice";

const QuestionOne: React.FC = () => {
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
          id: 1,
          question: "Who won the FIFA World Cup in 2018?",
          selectedAnswer,
          correctAnswer: "France",
        })
      );
      router.push("/question-two");
    }
  };

  return (
    <QuestionWrapper
      question="Who won the FIFA World Cup in 2018?"
      answers={["France", "Germany", "Portugal", "Spain"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={handleContinue}
    />
  );
};

export default QuestionOne;