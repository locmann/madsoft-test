import { useAppDispatch, useAppSelector } from 'store/store.ts';
import { addMultipleAnswers } from 'features/exam/examSlice.ts';
import styles from './CheckBox.module.scss';

type PropsType = {
  answers: string[];
  turn: number;
};

const CheckBox = ({ answers, turn }: PropsType) => {
  const dispatch = useAppDispatch();
  const selectedAnswer = useAppSelector((state) => state.exam.myAnswers[turn]);
  return (
    <div>
      {answers.map((answer, index) => (
        <label
          key={index}
          className={styles.container}
        >
          {answer}
          <input
            type="checkbox"
            name={`answer-${turn}`}
            checked={(selectedAnswer as Array<number>)?.includes(index)}
            onClick={() => dispatch(addMultipleAnswers({ turn, answer: index }))}
          />
          <span className={styles.checkmark}></span>
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
