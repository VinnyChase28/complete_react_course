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
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormApp();
  }
};

const removeAll = () => {
  //app.options.length = 0; this was my answer which worked fine.
  app.options = [];
  renderFormApp();
};

//create 'Remove All' button above list
// on click -> wipe the array -> rerender

const appRoot = document.getElementById("app");

// const numbers = [55, 101, 1000];

const renderFormApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
      <p>{app.options.length}</p>
      <ol>
        {app.options.map(options => (
          <li key={options}>{options}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={removeAll}>Remove All</button>
      </form>

      <ol>
        {/* map over app.options getting back an array of lis (set key and text) */}
      </ol>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderFormApp();

//Create render function that render the new jsx
//call it right away
//call it after options array added to
