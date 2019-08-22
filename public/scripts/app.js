"use strict";

console.log("App.js is running!");

// if statements
// ternary operrators
// logical and operator

//only render the sub-title (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

//make sure you remember {app.subtitle && <p>{app.subtitle}</p>}
//reads as "if we have app.subtitle then render the p tag"
//and <p>{app.options.length > 0 ? 'Here are your options:': 'No options'}</p>
//reads as if the length is greater than 0, print here are your options, otherwise no options

//changed var to const. assigning variables with const ensures defensive programming

var app = {
  title: "Indecision App",
  subtitle: "Put your hands in the life of a computer",
  options: ["One", "Two"]
};
var template = React.createElement(
  "div",
  null,
  React.createElement("h1", null, app.title),
  app.subtitle && React.createElement("p", null, app.subtitle),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options:" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement("li", null, "Item One"),
    React.createElement("li", null, "Item Tthreeeeeeee")
  )
);

// this is the first repeatable user interaction in this course.

var count = 0;
var addOne = function addOne() {
  console.log("addOne");
};
var minusOne = function minusOne() {
  console.log("minusOne");
};
var reset = function reset() {
  console.log("reset");
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Count ", count),
  React.createElement("button", { onClick: addOne }, "+1"),
  React.createElement("button", { onClick: minusOne }, "-1"),
  React.createElement("button", { onClick: reset }, "reset")
);

//Challenge
//Make Button "-1" - setup minusOne function and register  - log 'minus One'
//Make reset button 'reset' - setup reset function 'reset'

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
