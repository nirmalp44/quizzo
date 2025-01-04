"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuestionWrapper from "@/components/question-wrapper";
import { useDispatch, useSelector } from "react-redux";
import { checkAnswers, saveAnswer } from "@/state/question/questionSlice";
import { RootState } from "@/state/store";

const QuestionFive: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const questions = useSelector((state: RootState) => state.questions.questions);


  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer((prevAnswer) => (prevAnswer === answer ? null : answer));
  };

  useEffect(()=>{
    const allCorrect = questions.every((q) => q.isCorrect);
    console.log("allCorrect", allCorrect);
    if(questions.length == 5){
      router.push("/result");
    }

  },[questions, router])

  const handleContinue =  () => {
    if (selectedAnswer) {
      dispatch(
        saveAnswer({
          id: 5,
          question: "In which movie did the character 'Jack Dawson' appear?",
          selectedAnswer,
          correctAnswer: "Titanic",
        })
      );
      dispatch(checkAnswers());
    }
  };

  return (
    <QuestionWrapper
      question="In which movie did the character 'Jack Dawson' appear?"
      answers={["Titanic", "Avatar", "Inception", "The Notebook"]}
      options={["A", "B", "C", "D"]}
      selectedAnswer={selectedAnswer}
      onAnswerClick={handleAnswerClick}
      onBack={() => router.back()}
      onContinue={handleContinue}
    />
  );
};

export default QuestionFive;