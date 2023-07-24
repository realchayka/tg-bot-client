import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready()
    }, [])

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть окно</button>
    </div>
  );
}

export default App;
