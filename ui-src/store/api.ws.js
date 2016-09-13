import * as Actions from './api.Actions';

var socket = null;

export function wsMiddleware() {
  return (next) => (action) => {
    if (socket) {
      switch (action.type) {
        case 'ApiGetTreeData': socket.send('client:GetTreeData', {}); break;
        case 'ApiSetTreeData': socket.send('client:SetTreeData', action.data); break;
        case 'ApiGetSnipData': socket.send('client:GetSnipData', {}); break;
        case 'ApiSetSnipData': socket.send('client:SetSnipData', action.data); break;
        case 'ApiGetClipboard': socket.send('client:GetClipboard', {}); break;
        case 'ApiSetClipboard': socket.send('client:SetClipboard', action.clip); break;
      }
    }
    return next(action);
  };
}

export function startWs(store) {
  socket = new Primus();

  socket.on('server:GotTreeData', (data) => {
    store.dispatch(Actions.apiGotTreeData(data));
  });

  socket.on('server:GotSnipData', (data) => {
    store.dispatch(Actions.apiGotSnipData(data));
  });

  socket.on('server:GotClipboard', (clip) => {
    store.dispatch(Actions.apiGotClipboard(clip));
  });

  store.dispatch(Actions.apiGetSnipData());
}
