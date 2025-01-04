"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";
import { useDispatch } from "react-redux";
import { saveAnswer } from "@/state/question/questionSlice";

const QuestionTwo: React.FC = () => {
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
          id: 2,
          question: "What is the capital of Japan?",
          selectedAnswer,
          correctAnswer: "Tokyo",
        })
      );
      router.push("/question-three");
    }
  };


  return (
    <QuestionWrapper
      question="What is the capital of Japan?"
      answers={["Tokyo", "Seoul", "Beijing", "Bangkok"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={handleContinue}
    />
  );
};

export default QuestionTwo;