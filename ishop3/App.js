"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import MainShop from './components/MainShop';

let drugsArr=require('./productslist.json');
let ishopName='iDrugs';

ReactDOM.render(
  <MainShop 
    shopName={ishopName} 
    drugs={drugsArr}
  /> 
   , document.getElementById('container')
  );