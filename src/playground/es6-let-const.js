//ew, this is var. dont use, ever
var nameVar = "Vincent";
var nameVar = "Mike";
console.log("nameVar", nameVar);

//let is kinda okay
let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);
//now we're talking
const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
  let petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = "Andrew Mead";
let firstName;

if (fullName) {
  //if u write const or let here for firstName it won't show any where else. only var will work.
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
