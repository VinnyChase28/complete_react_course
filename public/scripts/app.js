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
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormApp();
  }
};

var removeAll = function removeAll() {
  //app.options.length = 0; this was my answer which worked fine.
  app.options = [];
  renderFormApp();
};

//create 'Remove All' button above list
// on click -> wipe the array -> rerender

var appRoot = document.getElementById("app");
var renderFormApp = function renderFormApp() {
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
    React.createElement("p", null, app.options.length),
    React.createElement(
      "ol",
      null,
      React.createElement("li", null, "Item One"),
      React.createElement("li", null, "Item Two")
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement("button", null, "Add Option"),
      React.createElement("button", { onClick: removeAll }, "Remove All")
    )
  );
  ReactDOM.render(template, appRoot);
};

renderFormApp();

//Create render function that render the new jsx
//call it right away
//call it after options array added to
