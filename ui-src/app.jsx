'use strict';

require('./index.html');
require('./css/index.css');
require('./img/Clippets1.ico');
require('./img/favicon.ico');
require('./img/fire.ico');
require('./img/leaf.ico');
require('./img/moon.ico');
require('./img/snow.ico');
require('./img/sun.ico');

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import AppCtrl from './components/app.ctrl';
import AppStore from './store/App.Store';

window.ReactDom = ReactDom;

ReactDom.render(
  <Provider store={AppStore}><AppCtrl /></Provider>,
  document.getElementById('react')
);
