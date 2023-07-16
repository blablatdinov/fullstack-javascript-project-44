#!/usr/bin/env node

import readName from './cli.js';

const name = readName();
console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name}!`);
