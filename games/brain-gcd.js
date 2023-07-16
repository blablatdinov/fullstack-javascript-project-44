#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../index.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const randomNumber = () => Math.floor(Math.random() * 100);

const gcdGame = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  const [a, b] = [randomNumber(), randomNumber()];
  console.log(`Question: ${a} ${b}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnsewr = gcd(a, b);
  for (let i = 0; i < 3; i += 1) {
    if (correctAnsewr === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsewr}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

gcdGame(name);
