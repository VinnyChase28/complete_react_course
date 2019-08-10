'use strict';

console.log('App.js is running!');

//JSX Javascript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some Info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Vincent Gauthier'
    ),
    React.createElement(
        'p',
        null,
        '28'
    ),
    React.createElement(
        'p',
        null,
        'Location: New Westminster'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
