//allMatches.js


/*
search the array for every element that matches the below expression and
return all matches in an array
plan: look up the regex method needed;

*/
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

//from the solutions; I need to understand the logic

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

console.log(allMatches(words, /lab/))
//allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']
