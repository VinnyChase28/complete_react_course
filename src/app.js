console.log('App.js is running!')

//JSX Javascript XML

var template = ( 
 <div>
    <h1>Indecision App</h1>
    <p>This is some Info</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);

var templateTwo = (
  <div>
  <h1>Vincent Gauthier</h1>
  <p>28</p>
  <p>Location: New Westminster</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);