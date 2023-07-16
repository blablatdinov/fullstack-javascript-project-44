#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../index.js';

const checkUserAnswer = (number, answer) => (number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no');

const evenGame = (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (checkUserAnswer(number, answer)) {
      console.log('Correct!');
    } else {
      if (answer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      }
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

evenGame(name);
