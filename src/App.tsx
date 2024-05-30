import './App.css';
import { useState } from 'react';
import MainScreen from 'components/MainScreen/MainScreen.tsx';

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <h1>Madsoft test</h1>

      {active ? <MainScreen /> : <button onClick={() => setActive(!active)}>Начать</button>}
    </>
  );
}

export default App;
