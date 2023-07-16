#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../index.js';

const randomNumber = () => Math.floor(Math.random() * 100);

const operators = [
  [
    '+',
    (a, b) => a + b,
  ],
  [
    '-',
    (a, b) => a - b,
  ],
  [
    '*',
    (a, b) => a * b,
  ],
];

const brainCalc = (playerName) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const [firstOperand, secondOperand] = [randomNumber(), randomNumber()];
    const selectedOperator = Math.floor(Math.random() * operators.length);
    const [operatorName, calcFunction] = operators[selectedOperator];
    console.log(`Question: ${firstOperand} ${operatorName} ${secondOperand}`);
    const correctAnswer = calcFunction(firstOperand, secondOperand);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

brainCalc(name);
