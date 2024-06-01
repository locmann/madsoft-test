import styles from './Radio.module.scss';
import { addAnswer } from 'features/exam/examSlice.ts';
import { useAppDispatch, useAppSelector } from 'store/store.ts';

type PropsType = {
  answers: string[];
  turn: number;
};

const Radio = ({ answers, turn }: PropsType) => {
  const dispatch = useAppDispatch();
  const selectedAnswer = useAppSelector((state) => state.exam.myAnswers[turn]);
  return (
    <div>
      {answers.map((answer, index) => (
        <label
          className={styles.container}
          key={index}
        >
          {answer}
          <input
            type="radio"
            name={`answer-${turn}`}
            checked={selectedAnswer === index}
            readOnly={true}
            onClick={() => dispatch(addAnswer({ turn, answer: index }))}
          />
          <span className={styles.checkmark}></span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
