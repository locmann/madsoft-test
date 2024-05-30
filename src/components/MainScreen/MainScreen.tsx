import { useState } from 'react';
import HeaderTest from 'components/HeaderTest/HeaderTest.tsx';
import BodyTest from 'components/BodyTest/BodyTest.tsx';
import styles from './MainScreen.module.scss';
const MainScreen = () => {
  const [turn, setTurn] = useState(0);

  return (
    <div className={styles.wrapper}>
      <HeaderTest />
      <BodyTest />
    </div>
  );
};

export default MainScreen;
