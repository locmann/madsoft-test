import styles from './App.module.scss';
import MainScreen from 'components/MainScreen/MainScreen.tsx';
import { useAppDispatch, useAppSelector } from 'store/store.ts';
import FinalScreen from 'components/FinalScreen/FinalScreen.tsx';
import { checkLS, startTest } from 'features/exam/examSlice.ts';
import { useEffect } from 'react';

function App() {
  const examStatus = useAppSelector((state) => state.exam.examStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkLS());
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Madsoft test</h1>

      {examStatus === 0 && <button onClick={() => dispatch(startTest())}>Начать</button>}
      {examStatus === 1 && <MainScreen />}
      {examStatus === 2 && <FinalScreen />}
    </div>
  );
}

export default App;
