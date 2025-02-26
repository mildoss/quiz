import styles from '../components/QuizScreen.module.css';
export default function QuizScreen({flag, score, options,handleAnswer, questionCount,currentIndex}) {
  const progress = Math.floor((currentIndex / questionCount) * 100)
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={ {width: `${progress}%`} }>‎</div>
      </div>
      <img src={flag} alt="flag" className={styles.flag}/>
      <h3 className={styles.score}>Score: {score}</h3>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            key={index}
            className={styles.optionButton}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}