console.log("App.js is running!");

// if statements
// ternary operrators
// logical and operator

var app = {
  title: "Indecision App",
  sub_title: "Put your hands in the life of a computer"
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.sub_title}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
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
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
