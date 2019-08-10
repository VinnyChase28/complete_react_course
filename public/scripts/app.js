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

var user = {
    name: 'Vincent',
    age: 28,
    location: 'New Westminster'
};
var userName = 'Vincent Gauthier';
var userAge = 26;
var userLocation = 'New Westminster';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
