import { useAppDispatch } from 'store/store.ts';
import { goHome } from 'features/exam/examSlice.ts';

const FinalScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3>Тест завершен, ожидайте результатов</h3>
      <button onClick={() => dispatch(goHome())}>Вернуться</button>
    </div>
  );
};

export default FinalScreen;
