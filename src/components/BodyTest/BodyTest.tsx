import Question from 'components/Question/Question.tsx';
import Answer from 'components/Answer/Answer.tsx';
import styles from './BodyTest.module.scss';
import { data } from 'data/data.ts';

type PropsType = {
  turn: number;
};

const BodyTest = ({ turn }: PropsType) => {
  return (
    <div className={styles.wrapper}>
      <Question>{data[turn]}</Question>
      <Answer />
    </div>
  );
};

export default BodyTest;
