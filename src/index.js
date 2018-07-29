import _ from 'lodash';
import './style.css';
import webpackIcon from './webpack.png';
import xmlData from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work.
  // Lodash is now imported from line 1
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div
  var icon = new Image();
  icon.src = webpackIcon;
  element.appendChild(icon);

  // Load XML data and console.log
  console.log(xmlData);

  return element;
}

document.body.appendChild(component());