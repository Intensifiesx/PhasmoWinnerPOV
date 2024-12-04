// Desc: Cleans PHAS.txt file and makes a map of it.

const { readFileSync } = require('fs');

let file = readFileSync('PHAS.txt', 'utf8'),
    lines = file.split('\n'),
    phrase = "cursed object",
    countGhosts = new Map(),
    arr = [[]];
    
for (let i = 0; i < lines.length; i++)
  arr[i] = lines[i].split('-');

for(let i = 0; i < arr.length; i++) {
  if (arr[i][1].includes(phrase))
    if (countGhosts.has(arr[i][0]))
      countGhosts.set(arr[i][0], countGhosts.get(arr[i][0]) + 1);
    else
      countGhosts.set(arr[i][0], 1);
  }
  try {
    console.log("The Ghost is most likely: ", [...countGhosts.entries()].sort((a, b) => b[1] - a[1])[0][0]);
    console.log(phrase, [...countGhosts.entries()].sort((a, b) => b[1] - a[1]));
  } catch (e) {
    console.log("No ghosts found.");
  }