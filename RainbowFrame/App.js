import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colors = 'red'

ReactDOM.render(
    <RainbowFrame colors={colors}>
    Hello!
  </RainbowFrame>
  , document.getElementById('container') 
);
