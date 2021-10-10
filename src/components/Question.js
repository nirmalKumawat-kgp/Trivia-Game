import React from "react";
import { shuffle } from "lodash";

export default function Question({ question, answeredOption }) {
  const answers = shuffle([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);
  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => answeredOption(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </div>
  );
}
