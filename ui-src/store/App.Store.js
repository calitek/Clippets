import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import {startWs, wsMiddleware} from './api.ws';
import {startIpc, ipcMiddleware} from './api.ipc';

import treeData from './tree.Reducer';
import snipData from './snip.Reducer';

const reducer = combineReducers({treeData, snipData});
let middleware = [thunkMiddleware];

const node = 1; //run in node-1 run in electron-0
if (node) middleware.push(wsMiddleware);
else middleware.push(ipcMiddleware);

const useLogger = 1;
const loggerMiddleware = createLogger();
if (useLogger) middleware.push(loggerMiddleware);

const store = createStore(reducer, applyMiddleware(...middleware));

if (node) startWs(store);
else startIpc(store);

export default store;
