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

var user = {
  name: "Vincent",
  age: 28,
  location: "New West"
};

function getLocation(location) {
  if (location) {
    return React.createElement("p", null, "Location: ", location);
  } else {
    return undefined;
  }
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement("h1", null, user.name ? user.name : "Anonymous"),
  user.age &&
    user.age >= 18 &&
    React.createElement("p", null, "Age: ", user.age),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
