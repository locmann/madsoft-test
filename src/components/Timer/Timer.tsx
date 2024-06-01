import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.ts';
import { tick } from 'features/exam/examSlice.ts';
import styles from './Timer.module.scss';
const Timer = () => {
  const timer = useAppSelector((state) => state.exam.timer);
  const dispatch = useAppDispatch();

  const mins = Math.floor(timer / 60);
  const sec = timer % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.timer}>
      {mins < 10 ? '0' : null}
      {mins}:{sec < 10 ? '0' : null}
      {sec}
    </div>
  );
};

export default Timer;
