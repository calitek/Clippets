import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {startWs, wsMiddleware} from './api.ws';
import {startIpc, ipcMiddleware} from './api.ipc';

import treeData from './tree.Reducer';
import snipData from './snip.Reducer';

const reducer = combineReducers({treeData, snipData});
let middleware = [thunkMiddleware];

const api = 2; //run in node-1 run in electron-2
if (api === 1) middleware.push(wsMiddleware);
else middleware.push(ipcMiddleware);

const store = createStore(reducer, applyMiddleware(...middleware));

if (api === 1) startWs(store);
else startIpc(store);

export default store;
