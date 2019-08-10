console.log('App.js is running!')

//JSX Javascript XML
var app = {
    title: 'Indecision App',
    sub_title: 'My First App',
   
};
var template = ( 
 <div>
    <h1>{app.title}</h1>
    <p>{app.sub_title}</p>
</div>
);

var userName = 'Vincent Gauthier'
var userAge = 26;
var userLocation = 'New Westminster'
var templateTwo = (
  <div>
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);