'use strict';

console.log('app is running');

var template = React.createElement(
  'p',
  null,
  'this this changed zzz '
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, app);
