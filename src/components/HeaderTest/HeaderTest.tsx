import styles from './HeaderTest.module.scss';
import Timer from 'components/Timer/Timer.tsx';
import ProgressBar from 'components/ProgressBar/ProgressBar.tsx';
const HeaderTest = () => {
  return (
    <>
      <div className={styles.top}>
        <h2>Тестирование</h2>
        <Timer />
      </div>
      <ProgressBar />
    </>
  );
};

export default HeaderTest;
