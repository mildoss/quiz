import './App.css'
import {useEffect, useState} from "react";
import QuizScreen from "./components/QuizScreen.jsx";
import StartGame from "./components/StartGame.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [flags, setFlags] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  console.log('123')
  useEffect(() => {
    fetch(`https://test-pi-tawny-79.vercel.app/api/flags?count=${questionCount}`)
      .then(res => res.json())
      .then(data => setFlags(data))
  },[questionCount])

  const handleAnswer = (answer) => {
    if(answer === flags[currentIndex].correct) {
      setScore(score + 1);
    }
    setCurrentIndex(prevIndex =>prevIndex + 1);
  }

  const handleStartGame  = (count) => {
    setQuestionCount(count);
    setIsStarted(true);
    setCurrentIndex(0)
    setScore(0)
  }

  const handleRestart  = () => {
    setIsStarted(false);
    setScore(0)
    setCurrentIndex(0)
  }

  return (
    <>
      {!isStarted ? (
        <StartGame onStartGame={handleStartGame} />
      ) : (
        currentIndex < flags.length ? (
          <QuizScreen
            flag={flags[currentIndex].flag}
            options={flags[currentIndex].options}
            score={score}
            questionCount={questionCount}
            currentIndex={currentIndex}
            handleAnswer={handleAnswer}
          />
        ) : (
          <Results score={score} onRestart={handleRestart} questionCount={questionCount} />
        )
      )}
    </>
    )
}

export default App
