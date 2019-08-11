function square(x) {
  return x * x;
}

console.log(square(3));

//if you want to create an arrow function and use it later, you have to assign it to a variable.

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = x => x * x;

console.log(squareArrow(9));

// Challenge - Use arrow functions
// getFirstName('Vince Murray) -> 'Vince'
//create regular arrow function
//create arrow function using shorthand syntax

//this is a regular arrow function

// const getFirstName = (fullName) => {
//    return fullName.split(" ")[0];
// }
// console.log(getFirstName('Vincent Gauthier'));

//this is a function with shorthand syntax

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("Vincent Gauthier"));
