"use strict";

console.log("App.js is running!");

// if statements
// ternary operrators
// logical and operator

var app = {
  title: "Indecision App",
  sub_title: "Put your hands in the life of a computer"
};
var template = React.createElement(
  "div",
  null,
  React.createElement("h1", null, app.title),
  React.createElement("p", null, app.sub_title),
  React.createElement(
    "ol",
    null,
    React.createElement("li", null, "Item One"),
    React.createElement("li", null, "Item Two")
  )
);

var user = {
  name: "Vincent",
  age: 28
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return "Unkown";
  }
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement("h1", null, user.name),
  React.createElement("p", null, "Age: ", user.age),
  React.createElement("p", null, "Location: ", getLocation(user.location))
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
