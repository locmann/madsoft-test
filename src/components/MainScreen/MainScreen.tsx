import HeaderTest from 'components/HeaderTest/HeaderTest.tsx';
import BodyTest from 'components/BodyTest/BodyTest.tsx';
import styles from './MainScreen.module.scss';
import { useAppDispatch, useAppSelector } from 'store/store.ts';
import { nextQuestion } from 'features/exam/examSlice.ts';
const MainScreen = () => {
  const turn = useAppSelector((state) => state.exam.currentQuestion);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <HeaderTest />
      <BodyTest turn={turn} />
      <button onClick={() => dispatch(nextQuestion())}>Ответить</button>
    </div>
  );
};

export default MainScreen;
