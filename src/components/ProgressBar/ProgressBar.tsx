import { useAppDispatch, useAppSelector } from 'store/store.ts';
import { questionByNum } from 'features/exam/examSlice.ts';
import Bar from 'components/Bar/Bar.tsx';
import styles from './ProgressBar.module.scss';
const ProgressBar = () => {
  const questions = useAppSelector((state) => state.exam.myAnswers);
  const current = useAppSelector((state) => state.exam.currentQuestion);
  const dispatch = useAppDispatch();
  const handleClick = (id: number) => {
    dispatch(questionByNum(id));
  };

  return (
    <div className={styles.line}>
      {questions.map((_, index) => (
        <Bar
          handleClick={handleClick}
          id={index}
          key={index}
          current={current}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
