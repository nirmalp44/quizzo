"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";

const QuestionTwo: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };

  return (
    <QuestionWrapper
      question="What is the capital of Japan?"
      answers={["Tokyo", "Seoul", "Beijing", "Bangkok"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={() => router.push("/question-three")}
    />
  );
};

export default QuestionTwo;