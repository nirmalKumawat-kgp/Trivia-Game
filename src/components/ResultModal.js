import React from "react";

export default function ResultModal({
  isCorrect,
  correctAnswer,
  nextQuestion,
}) {
  return (
    <div className={`result-modal ${isCorrect ? "is-correct" : "is-wrong"}`}>
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect && (
          <h3>
            👊👊👊
            <br />
            YOU WON!
          </h3>
        )}
        {!isCorrect && (
          <h3>
            😟😢😟
            <br />
            YOU LOST!
          </h3>
        )}
        <div className="correct-answer">
          <small>The correct answer was:</small>
          <br />
          <strong dangerouslySetInnerHTML={{ __html: correctAnswer }} />
        </div>

        <button onClick={() => nextQuestion()}>Go to next question 👉</button>
      </div>
    </div>
  );
}
