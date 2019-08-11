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

const app = {
  title: "Indecision App",
  subtitle: "Put your hands in the life of a computer",
  options: ["One", "Two"]
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
    <ol>
      <li>Item One</li>
      <li>Item Tthreeeeeeee</li>
    </ol>
  </div>
);

const user = {
  name: "Vincent",
  age: 28,
  location: "New West"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
