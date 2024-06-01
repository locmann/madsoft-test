import Question from 'components/Question/Question.tsx';
import Answer from 'components/Answer/Answer.tsx';
import styles from './BodyTest.module.scss';
import { useAppSelector } from 'store/store.ts';

type PropsType = {
  turn: number;
};

const BodyTest = ({ turn }: PropsType) => {
  //const { question, answers } = useAppSelector((state) => state.exam.questions)[turn];
  const qAndA = useAppSelector((state) => state.exam.questions);
  if (turn >= qAndA.length) {
    return;
  }
  return (
    <div className={styles.wrapper}>
      <Question>{qAndA[turn].question}</Question>
      <Answer
        answers={qAndA[turn].answers}
        turn={turn}
        type={qAndA[turn].type}
      />
    </div>
  );
};

export default BodyTest;
