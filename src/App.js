import React, { useEffect, useState, useCallback } from "react";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import Question from "./components/Question";
import "./App.css";

export default function App() {
  const [selectedCategory, setSelectedCatogery] = useState("any");
  const [question, setQuestion] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const getQuestion = useCallback(() => {
    setIsCorrect(null);
    let url = "https://opentdb.com/api.php?amount=1";
    if (selectedCategory !== "any") url += `&category=${selectedCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
      });
  }, [selectedCategory]);
  useEffect(() => {
    getQuestion();
  }, [getQuestion]);
  const handleAnsweredOption = (answer) => {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  };
  const handleNextQuestion = () => {
    setIsCorrect(null);
    getQuestion();
  };
  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          correctAnswer={question.correct_answer}
          nextQuestion={handleNextQuestion}
        />
      )}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          category={selectedCategory}
          chooseCategory={setSelectedCatogery}
        />
        <Scoreboard isCorrect={isCorrect} />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && (
          <Question question={question} answeredOption={handleAnsweredOption} />
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={handleNextQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
