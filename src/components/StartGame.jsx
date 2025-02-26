import {useState} from "react";
import style from './StartGame.module.css'

export default function StartGame({onStartGame}) {
  const [questionCount, setQuestionConut] = useState(5);

  const handleInputChange = (e) => {
    setQuestionConut(e.target.value);
  }

  const handleStartGame = () => {
    if(questionCount > 22) return alert('Choose in range 1 to 20 questions')
    onStartGame(questionCount);
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Choose the number of questions</h2>
      <div className={style.start}>
        <input
          type="number"
          value={questionCount}
          className={style.input}
          onChange={handleInputChange}
          min="1"
          max="20"
        />
        <button
          className={style.button}
          onClick={handleStartGame}
        >
          Start
        </button>
      </div>
    </div>
  )
}