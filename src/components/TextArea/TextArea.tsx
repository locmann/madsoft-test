import { useAppDispatch, useAppSelector } from 'store/store.ts';
import { addTextAnswer } from 'features/exam/examSlice.ts';
import { ChangeEvent, useState } from 'react';
import styles from './TextArea.module.scss';
type PropsType = {
  turn: number;
};

const TextArea = ({ turn }: PropsType) => {
  const answer = useAppSelector((state) => state.exam.myAnswers)[turn];
  const [value, setValue] = useState(answer as string);
  const dispatch = useAppDispatch();
  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    dispatch(addTextAnswer({ turn: turn, answer: e.target.value }));
  };

  return (
    <div>
      <textarea
        className={styles.text}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default TextArea;
