import style from './Results.module.css';

export default function Results({score,onRestart, questionCount}) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Game Over!</h2>
      <p className={style.score}>Your score: {score} / {questionCount}</p>
      <button className={style.button} onClick={onRestart}>Play Again</button>
    </div>
  )
}