"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";

const QuestionFour: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };

  return (
    <QuestionWrapper
      question="Who was the first President of the United States?"
      answers={["George Washington ", "Abraham Lincoln", "Thomas Jefferson", "John Adams"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={() => router.push("/question-five")}
    />
  );
};

export default QuestionFour;