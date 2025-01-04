"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";
import { useDispatch } from "react-redux";
import { saveAnswer } from "@/state/question/questionSlice";

const QuestionThree: React.FC = () => {
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
            id: 3,
            question: "Which planet is known as the Red Planet?",
            selectedAnswer,
            correctAnswer: "Mars",
          })
        );
        router.push("/question-four");
      }
    };

  return (
    <QuestionWrapper
      question="Which planet is known as the Red Planet?"
      answers={["Mars", "Venus", "Jupiter", "Saturn"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={handleContinue}
    />
  );
};

export default QuestionThree;