#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../index.js';

const generateProgression = () => {
  const res = [Math.floor(Math.random() * 100)];
  const inc = Math.floor(Math.random() * 10);
  for (let i = 1; i < Math.random() * (10 - 5) + 5; i += 1) {
    res.push(res[i - 1] + inc);
  }
  return res;
};

const progressionGame = (playerName) => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = generateProgression();
    const idx = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[idx];
    progression[idx] = '..';
    console.log('Question:', progression.join(' '));
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

progressionGame(name);
