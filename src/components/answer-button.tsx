import React from 'react';

interface AnswerButtonProps {
    answer: string;
    isSelected: boolean;
    option: string;
    onClick: () => void;
}


const AnswerButton: React.FC<AnswerButtonProps> = ({ answer, isSelected, option, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center w-full py-2 px-4 rounded-md transition group ${isSelected ? "bg-[#FE909D] text-white" : "bg-[#F8F8F8] text-black hover:bg-[#FE909D] hover:text-white"
            }`}
    >
        <div
            className={`flex items-center justify-center w-8 h-8 rounded-full text-[#FF475D] font-semibold shadow-inner mr-4 transition ${isSelected ? "bg-[#FF475D] !text-[#FFECDB]" : "bg-[#FFECDB]"
                } group-hover:bg-[#FF475D] group-hover:text-[#FFECDB]`}
        >
            {option}
        </div>
        <span>{answer}</span>
    </button>
);

export default AnswerButton;
