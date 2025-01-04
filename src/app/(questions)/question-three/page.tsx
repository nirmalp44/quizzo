"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";

const QuestionThree: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };

  return (
    <QuestionWrapper
      question="Which planet is known as the Red Planet?"
      answers={["Mars", "Venus", "Jupiter", "Saturn"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={() => router.push("/question-four")}
    />
  );
};

export default QuestionThree;