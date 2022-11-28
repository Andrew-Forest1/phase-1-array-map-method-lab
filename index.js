const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/* const titleCased = () => {
  return tutorials.map(upperCaseFirstLetter);
} */

function titleCased(){
  return tutorials.map(upperCaseFirstLetter);
}

//console.log(titleCased());

function upperCaseFirstLetter(string){
  let newString = string[0].toUpperCase();
  for(let index = 1; index < string.length; index++){
    if(string[index] === ' '){
      newString += ' ' + string[index + 1].toUpperCase();
      ++index;
    }
    else{
      newString += string[index];
    }
  }
  return newString;
}

/* console.log(upperCaseFirstLetter('what does the this keyword mean?'));
let string = 'what does the this keyword mean?';
string[0] = 'W';
console.log(string[0]); */