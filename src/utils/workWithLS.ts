import { AnswerType } from 'features/exam/examSlice.ts';

export const saveToLS = (data: AnswerType[]) => {
  localStorage.setItem('answers', JSON.stringify(data));
};

export const loadFromLS = (): AnswerType[] | null => {
  const data = localStorage.getItem('answers');
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

export const clearLS = () => {
  localStorage.clear();
};
