import { data } from 'data/data.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clearLS, loadFromLS, saveToLS } from 'utils/workWithLS.ts';

export type AnswerType = null | string | number | number[];

export interface ExamState {
  questions: typeof data;
  myAnswers: AnswerType[];
  currentQuestion: number;
  timer: number;
  examStatus: number;
}

const initialState: ExamState = {
  questions: data,
  myAnswers: Array.from(data, () => null),
  currentQuestion: 0,
  timer: 600,
  examStatus: 0,
};

export const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    checkLS: (state) => {
      const data = loadFromLS();
      if (data) {
        state.myAnswers = data;
      } else {
        return;
      }
    },
    addAnswer: (state, { payload }: PayloadAction<{ turn: number; answer: number }>) => {
      state.myAnswers[payload.turn] = payload.answer;
      saveToLS(state.myAnswers);
    },
    addMultipleAnswers: (state, { payload }: PayloadAction<{ turn: number; answer: number }>) => {
      const currentAnswers = state.myAnswers[payload.turn] || [];
      const answerIndex = (currentAnswers as Array<number>).indexOf(payload.answer);
      if (answerIndex > -1) {
        (currentAnswers as Array<number>).splice(answerIndex, 1);
      } else {
        (currentAnswers as Array<number>).push(payload.answer);
      }
      state.myAnswers[payload.turn] = currentAnswers;
      saveToLS(state.myAnswers);
    },
    addTextAnswer: (state, { payload }: PayloadAction<{ turn: number; answer: string }>) => {
      state.myAnswers[payload.turn] = payload.answer;
      saveToLS(state.myAnswers);
    },
    nextQuestion: (state) => {
      if (state.currentQuestion >= state.questions.length - 1) {
        state.examStatus = 2;
        clearLS();
        return;
      }
      state.currentQuestion += 1;
    },
    questionByNum: (state, { payload }: PayloadAction<number>) => {
      state.currentQuestion = payload;
    },
    tick: (state) => {
      if (state.timer === 0) {
        state.examStatus = 2;
        clearLS();
        return;
      }
      state.timer -= 1;
    },
    startTest: (state) => {
      state.examStatus = 1;
    },
    goHome: (state) => {
      state.examStatus = 0;
    },
  },
});

export const {
  addMultipleAnswers,
  addTextAnswer,
  startTest,
  nextQuestion,
  tick,
  questionByNum,
  addAnswer,
  checkLS,
  goHome,
} = examSlice.actions;

export default examSlice.reducer;
