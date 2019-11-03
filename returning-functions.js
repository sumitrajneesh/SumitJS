//DON'T DO THIS !!!
///var myVariable = "i am at the gloable scope";
//THIS EITHER
/*
var myVariable = function() {
  console.log("me too!");
};
*/
/*
function one() {
  return "one";
}

let value = one;
console.log(typeof one);
//console.log(one());
/**
 * variable ref to function , so use funtion operator () with the value and behave like a function
 */
//console.log(value());

//string, boolean , number , undefined , function

/**
 * function returning function expression , myFunction var if refrenceing to outer function
 */
/*
function two() {
  return function() {
    console.log("two");
  };
}

let myFunction = two();
myFunction();
*/

function three() {
  return function() {
    return "three";
  };
}
// console.log(three()());
console.log(three()());
