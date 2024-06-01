import styles from './Answer.module.scss';
import Radio from 'components/Radio/Radio.tsx';
import CheckBox from 'components/CheckBox/CheckBox.tsx';
import TextArea from 'components/TextArea/TextArea.tsx';

type PropsType = {
  answers: string[];
  turn: number;
  type: string;
};

const Answer = ({ answers, turn, type }: PropsType) => {
  /*const dispatch = useAppDispatch();
  const selectedAnswer = useAppSelector((state) => state.exam.myAnswers[turn]);*/
  return (
    <div className={styles.answers}>
      {type === 'test' && (
        <Radio
          answers={answers}
          turn={turn}
        />
      )}
      {type === 'multitest' && (
        <CheckBox
          answers={answers}
          turn={turn}
        />
      )}
      {type === 'text' && <TextArea turn={turn} />}
    </div>
  );
};

export default Answer;
