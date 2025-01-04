import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
  id: number;
  question: string;
  selectedAnswer: string | null;
  correctAnswer?: string; // Add correctAnswer to store the correct answer for each question
  isCorrect?: boolean; // Store if the user's answer is correct
}

interface QuestionState {
  questions: Question[];
}

const initialState: QuestionState = {
  questions: [],
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    saveAnswer: (
      state,
      action: PayloadAction<{ id: number; question: string; selectedAnswer: string; correctAnswer: string }>
    ) => {
      const existingQuestion = state.questions.find((q) => q.id === action.payload.id);

      if (existingQuestion) {
        existingQuestion.selectedAnswer = action.payload.selectedAnswer;
        existingQuestion.correctAnswer = action.payload.correctAnswer;
      } else {
        console.log("action.payload", action.payload);
        state.questions.push({
          id: action.payload.id,
          question: action.payload.question,
          selectedAnswer: action.payload.selectedAnswer,
          correctAnswer: action.payload.correctAnswer,
        });
 console.log("state.questions", state.questions.length);
      }
    },
    checkAnswers: (state) => {
        console.log("@@@@@@@@@@@@@@@@@");
      state.questions = state.questions.map((q) => ({
        ...q,
        isCorrect: q.selectedAnswer === q.correctAnswer,
      }));
    },
    clearAnswers: (state) => {
      state.questions = [];
    }
  },
});

export const { saveAnswer, checkAnswers, clearAnswers } = questionSlice.actions;

export default questionSlice.reducer;
