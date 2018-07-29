import _ from 'lodash';
import './style.css';
import webpackIcon from './webpack.png';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work.
  // Lodash is now imported from line 1
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existin div
  var icon = new Image();
  icon.src = webpackIcon;
  element.appendChild(icon);

  return element;
}

document.body.appendChild(component());