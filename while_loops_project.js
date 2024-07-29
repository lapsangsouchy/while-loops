/* Part 1a - Counting Down */
let counter = 100;

while (counter >= 0) {
  console.log(counter);
  counter--;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 1b - Counting Down + User Input */
let userCounter = Number(process.argv[2]);

while (userCounter >= 0) {
  console.log(userCounter);
  userCounter--;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - While Loop Gymnastics */

/* Question #1: */
// Three Times

/* Question #2: */
// Infinitely!

/* Question #3: */
// Five Times

/* Question #4: */
// Two Times

/* Question #5: */
let num = 0;

// Change from > to <
while (num < 10) {
  // Remove the break from this line
  console.log('Little Donald Drumpf');
  num++;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 3a - Two Random Numbers */
let x = 0;
while (x < 1) {
  let randNum1 = Math.floor(Math.random() * 11);
  let randNum2 = Math.floor(Math.random() * 11);

  console.log('1st random number:', randNum1, '2nd random number:', randNum2);
  if (randNum1 == randNum2) {
    console.log('Same random numbers! End Loop');
    break;
  }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 3b - Two Random Numbers */
// Note: You can also create the infinite loop with the tryCount by setting
//       while (tryCount > 0) or something that will always be true!
let tryCount = 1;

while (x < 1) {
  let randNum1 = Math.floor(Math.random() * 11);
  let randNum2 = Math.floor(Math.random() * 11);
  console.log(
    'Try #' + tryCount,
    '-',
    '1st random number:',
    randNum1,
    '2nd random number:',
    randNum2
  );
  if (randNum1 == randNum2) {
    console.log('Same random numbers on try #' + tryCount + '! End Loop');
    break;
  }
  tryCount++;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - Binary Numbers */
let decimal = Number(process.argv[2]);
let calcNum = decimal;
let binary = '';

while (calcNum > 0) {
  let remainder = calcNum % 2;
  binary = remainder.toString() + binary;

  console.log(calcNum, '% 2 =', remainder, '---', binary);
  console.log(calcNum, '/ 2 =', Math.floor(calcNum / 2));
  console.log('');
  calcNum = Math.floor(calcNum / 2);
}

console.log('Number in decimal:', decimal);
console.log('Number in binary:', binary);
