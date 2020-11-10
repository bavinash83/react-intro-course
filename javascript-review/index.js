
// Make this function crash when ran by scoping created properly
function varOrConst() {
  if (true) {
    var created = true;
  }
  console.log(created);
}

// Rewrite The below to use a tempalate string
function templateLiterals(name) {
  const str = 'Hello ' + name + ' how are you today?'
  return str;
}

// Return a copy of the passed in array using spreads
function arrayCopy(array) {
}

// Return a new array with item appended to the end of the passed in array using spreads
function appendNewArray(array, item) {
}

// Return a copy of the object using spreads
function objectCopy(obj) {

}

/*
  Return a new object with all the keys and values of the passed in object, but
  with the additional key value passed in.

  i.e. addToObject({name: 'tammy}, 'age', 20) => {name: 'tammy' age: 20}
*/
function addToObject(obj, key, value) {

}

// Return a new obj with the passed in key removed
function removeFromObject(obj, key) {

}

// Add two parameters to this function. Return the summed value
function addBasic() {

}

/*
  This function will add 2 passed in numbers like add basic. It also has the
  following extra fancy behavior:

1. If only one number is passed in, it will add 1 to it i.e. addFancy(14) => 15

Note: you must add parameters to this function
*/
function addFancy() {

}

// addAll will add together n numbers passed in addAll(2, 5, 10, 10) => 27
// Note: you must add parameters to this function
function addAll() {

}

/*
  Finish the implementation of the Person constructor function
  it must store the passed in name. Also implement the getName
  function which will return it.  
*/
function Person(name) {
}

Person.prototype.getName = function() {
}

//Make an es6 class based version of the Person constructor
class PersonClass {

}

// return a new array with 10 added to every element
function add10ToAll(array) {

}

// multiply all passed in numbers together
function multiplyTogether(array) {

}

// negate each number, then add them all together
// i.e. [1, -10, 5, 4] => [-1, 10, -5, -4] => 0
function negateThenAdd(array) {
  
}


module.exports = {
  varOrConst,
  templateLiterals,
  arrayCopy,
  appendNewArray,
  objectCopy,
  addToObject,
  removeFromObject,
  addBasic,
  addFancy,
  addAll,
  Person,
  PersonClass,
  add10ToAll,
  multiplyTogether,
  negateThenAdd
}