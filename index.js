var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

// function funkyFunction() {
//   var funkyVariable = "FUNKY!";
//   return function theFunk() {
//     return funkyVariable;
//   }
// }
// var theFunk = funkyFunction();


// var funkyFunction = function() {
//   var innerVariable = "FUNKY!";
//   return function theFunk() {

//     return innerVariable;
//   }
// }
// var theFunk = funkyFunction();
// theFunk();


// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?

var funkyFunction = function(){
    return function theFunk(){
      return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?

var theFunk = funkyFunction();
var theFunk = theFunk();
