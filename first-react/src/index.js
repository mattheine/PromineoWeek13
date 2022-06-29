import React from 'react';
import ReactDOM from 'react-dom';
//element tag, a props object, the content(children) of element to be rendered
let element = React.createElement('h1', {}, 'This is React!');
ReactDOM.render(element, document.getElementById('app'));