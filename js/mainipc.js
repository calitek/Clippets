'use strict';

const getSetJson = require('./socket/getsetdata');

module.exports = function(socket) {
  console.log('mainipc called.');

  const getSnipDataDone = function(event, data){ event.sender.send('server:GotSnipData', data); };
  const onGetSnipData = function(event) { getSetJson.getSnipData(event, getSnipDataDone); };
  socket.on('client:GetSnipData', onGetSnipData);

  const onSetSnipData = function(event, data) { getSetJson.setSnipData(data); };
  socket.on('client:SetSnipData', onSetSnipData);

  const getTreeDataDone = function(event, data){ event.sender.send('server:GotTreeData', data); };
  const onGetTreeData = function(event){ getSetJson.getTreeData(event, getTreeDataDone); };
  socket.on('client:GetTreeData', onGetTreeData);

  const onSetTreeData = function(event, data){ getSetJson.setTreeData(data); };
  socket.on('client:SetTreeData', onSetTreeData);
};
