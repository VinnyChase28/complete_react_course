"use strict";

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  //   console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound

var user = {
  name: "Vince",
  cities: ["Montreal", "Vancouver", "New York"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function(city) {
      return _this.name + " has lived in " + city + "!";
    });
  }
};

console.log(user.printPlacesLived());

//Challenge area

var multiplier = {
  //numbers - array of numbers
  //multiplyBy (value) - single number
  //multiply (method) return a new array where the number has been multiplied
  multiplyBy: 2,
  numbers: [20, 40, 60], //done

  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function(number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]
