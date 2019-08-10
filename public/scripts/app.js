'use strict';

console.log('App.js is running!');

//JSX Javascript XML
var app = {
    title: 'Indecision App',
    sub_title: 'Put your hands in the life of a computer'

};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.sub_title
    )
);

// var userName = 'Vincent Gauthier'
// var userAge = 26;
// var userLocation = 'New Westminster'
// var templateTwo = (
//   <div>
//   <h1>{user.name}</h1>
//   <p>Age: {user.age}</p>
//   <p>Location: {user.location}</p>
//   </div>
// );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
