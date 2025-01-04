"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";

const QuestionFive: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };

  return (
    <QuestionWrapper
      question="In which movie did the character 'Jack Dawson' appear?"
      answers={["Titanic", "Avatar", "Inception", "The Notebook"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={() => router.push("/question-five")}
    />
  );
};

export default QuestionFive;