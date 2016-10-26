var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
var animal = 'cat'
  return animal
}

const two = 2

function add2(n) {
  return n + two

  // Feel free to move things around!

}

function funkyFunction() {
  var dance = "FUNKY!"

  return function() {
    return dance;
  }
}
var theFunk = funkyFunction()();




// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
