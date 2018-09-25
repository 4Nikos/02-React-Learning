import React from 'react';
import ReactDOM from 'react-dom';



const green = React.createElement("li", {}, "Green");
const blue = React.createElement("li", {}, "Blue");
const red = React.createElement("li", {}, "Red");

const regina = React.createElement("li", {}, "Regina Spektor");
const antonin = React.createElement("li", {}, "Antonín Dvořák");
const radiohead = React.createElement("li", {}, "Radiohead");

const pizza = React.createElement("li", {}, "Pizza");
const ceasar = React.createElement("li", {}, "Ceasar Salad");
const gnocchi = React.createElement("li", {}, "Gnocchi");

const google = React.createElement("li", {},
React.createElement("a", {href: 'https://www.google.com'}, "www.google.com"));
const facebook = React.createElement("li", {},
React.createElement("a", {href: 'https://www.facebook.com'},  "www.facebook.com"));
const instagram = React.createElement("li", {}, 
React.createElement("a", {href: 'https://www.instagram.com'}, "www.instagram.com"));


ReactDOM.render(
    React.createElement('ul', {},
        React.createElement('li', {}, "Favorite Colors",
            React.createElement('ol', {},green,blue, red),
        ),
        React.createElement('li', {}, 'Favorite Music',
            React.createElement('ol', {}, regina, antonin, radiohead),
        ),
        React.createElement('li', {}, 'Favorite Food',
        React.createElement('ol', {}, pizza, ceasar, gnocchi),
    ),
        React.createElement('li', {}, 'Favorite Websites',
            React.createElement('ol', {}, google, facebook, instagram)
        )
    ),
    document.getElementById('root')
);