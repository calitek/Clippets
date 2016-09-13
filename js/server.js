'use strict';

const express = require('express');
const favicon = require('serve-favicon');

const path = require('path');
const Primus = require('primus');
const Emitter = require('primus-emitter');
const socketCallBack = function(socket){ require('./mainsocket')(socket); };
const port = Number(process.env.CLIPPETSPORT || 3300);

const app = express();

const server = app.listen(port);
const sio = new Primus(server, {transformer: 'websockets', parser: 'JSON'});
sio.use('emitter', Emitter);

sio.on('connection', socketCallBack);

app.use('/', express.static('ui-dist'));
app.use(favicon(path.join(__dirname, '..', 'ui-dist', 'img', 'favicon.ico')));
app.get('/', function(req, res){ res.sendFile(__dirname + '/index.html', [], null); });
