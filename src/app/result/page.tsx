"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/state/store";
import Image from "next/image";
import { clearAnswers } from "@/state/question/questionSlice";

const ResultsPage: React.FC = () => {
    const questions = useSelector((state: RootState) => state.questions.questions);
    const router = useRouter();
    const dispatch =useDispatch();

    const hasIncorrectAnswers = questions.some((q) => q.isCorrect === false);

    const handleTryAgain = () => {
        dispatch(clearAnswers());
        router.push("/question-one");

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
            <div className="flex items-center justify-center w-20 h-20 bg-white shadow-lg rounded-full">
                {hasIncorrectAnswers ?<Image
                    src="./close.png"
                    alt="Checklist Icon"
                    width={30}
                    height={30}
                    objectFit="contain"
                />: <Image
                    src="./correct.png"
                    alt="Checklist Icon"
                    width={30}
                    height={30}
                    objectFit="contain"
                />}
            </div>

            <h1 className="text-3xl font-bold mb-4 mt-6">
                {hasIncorrectAnswers ? "Try Again" : "Congratulations!"}
            </h1>
            {hasIncorrectAnswers ? (
                <p className="text-lg mb-3 w-[30%] text-center">
                    Some of your answers were not quite right this time, but don&apos;t worry! Take a moment to review, and give it another shot. You&apos;re getting closer to success with each attempt!
                </p>
            ) : (
                <p className="text-lg mb-3 w-[30%] text-center">
                    You’ve successfully completed the quiz—great job! Keep up the fantastic work and challenge yourself to achieve even more!
                </p>
            )}
            <div className="flex flex-row items-center mb-6">
                <Image
                    src="./checklist.png"
                    alt="Checklist Icon"
                    width={50}
                    height={50}
                    objectFit="contain"
                />
                <ul className="mb-6 flex flex-row mt-8">
                    {questions.map((q) => (
                        <li key={q.id} className="mb-2 flex flex-row ml-3">
                            Q{q.id} -{" "}
                            {q.isCorrect ? (
                                <Image
                                    src="./correct.png"
                                    alt="Correct Icon"
                                    width={20}
                                    height={20}
                                    objectFit="contain"
                                />
                            ) : (
                                <Image
                                    src="./close.png"
                                    alt="Incorrect Icon"
                                    width={20}
                                    height={20}
                                    objectFit="contain"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <button
                className="px-6 py-3 bg-[#FF1788] text-white font-bold rounded hover:bg-[#c52874]"
                onClick={handleTryAgain}
            >
                {hasIncorrectAnswers ? "Try Again" : "Start Over"}
            </button>
        </div>
    );

};

export default ResultsPage;
