"use client";

import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import AnswerButton from "@/components/answer-button";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useRouter } from "next/navigation";

const QuestionWrapper: React.FC<{
    question: string;
    answers: string[];
    options: string[];
    selectedAnswer: string | null;
    onAnswerClick: (answer: string) => void;
    onBack: () => void;
    onContinue: () => void;
}> = ({ question, answers, options, selectedAnswer, onAnswerClick, onBack, onContinue }) => {
    const router = useRouter(); 
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    const handleContinue = () => {
        if (!isAuthenticated) {
             router.push("/signup");
        }else{
            onContinue();

        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-xl font-semibold mb-6 text-center">{question}</h1>
                <div className="space-y-4">
                    {answers.map((answer, index) => (
                        <AnswerButton
                            key={answer}
                            answer={answer}
                            isSelected={selectedAnswer === answer}
                            option={options[index]}
                            onClick={() => onAnswerClick(answer)}
                        />
                    ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <button
                        onClick={onBack}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5A5A5A] hover:bg-[#434343] transition"
                    >
                        <FiArrowLeft className="text-[#FFFFFF] text-2xl" />
                    </button>
                    <button
                        className={`w-4/5 bg-[#FB2E86] text-white font-bold py-2 rounded-md hover:bg-[#dd2a77] transition ${!selectedAnswer && "opacity-50 cursor-not-allowed"
                            }`}
                        disabled={!selectedAnswer}
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionWrapper;