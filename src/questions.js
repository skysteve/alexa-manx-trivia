'use strict';

const questions = [
  {
    "question": "What is the capital of the island?",
    "answers": [
      "Ramsey",
      "Port Erin",
      "Castletown",
      "Peel",
      "Port St Mary"
    ],
    "correct": "Douglas"
  },
  {
    "question": "What type of animal is the island famous for?",
    "answers": [
      "dogs",
      "horses",
      "seals",
      "donkeys",
      "squirrels"
    ],
    "correct": "cats"
  },
  {
    "question": "What is the name of the manx parliament?",
    "answers": [
      "Mannanin",
      "Congress",
      "Moredor",
      "Douglas",
      "Machold"
    ],
    "correct": "Tynwald"
  }
];

// Do not change anything below this line

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const ANSWER_COUNT = process.env.ANSWER_COUNT || 3; // The number of possible answers per trivia question.
const GAME_LENGTH = process.env.GAME_LENGTH || 5;  // The number of questions per trivia game.

// shuffle questions and pick the first GAME_LENGTH questions
module.exports = shuffleArray(questions)
  .splice(0, GAME_LENGTH)
  .map((question) => {
    // shuffle answers and add the correct answer
    const answers = shuffleArray(question.answers).splice(0, ANSWER_COUNT - 1);
    answers.push(question.correct);

    return {
      question: question.question,
      answers: shuffleArray(answers), // shuffle answers again so the last one isn't always right
      correct: question.correct
    };
  });
