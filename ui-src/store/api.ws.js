import * as Actions from './api.Actions';

let socket = null;

export function wsMiddleware() {
  return next => (action) => {
    if (socket) {
      switch (action.type) {
        case 'ApiGetTreeData':
          socket.emit('client:GetTreeData', {});
          break;
        case 'ApiSetTreeData':
          socket.emit('client:SetTreeData', action.data);
          break;
        case 'ApiGetSnipData':
          socket.emit('client:GetSnipData', {});
          break;
        case 'ApiSetSnipData':
          socket.emit('client:SetSnipData', action.data);
          break;
        case 'ApiGetClipboard':
          socket.emit('client:GetClipboard', {});
          break;
        case 'ApiSetClipboard':
          socket.emit('client:SetClipboard', action.clip);
          break;
        default: break;
      }
    }
    return next(action);
  };
}

export function startWs(store) {
  socket = new io();

  socket.on('server:GetTreeDataDone', (data) => {
    store.dispatch(Actions.apiGetTreeDataDone(data));
  });

  socket.on('server:GetSnipDataDone', (data) => {
    store.dispatch(Actions.apiGetSnipDataDone(data));
  });

  socket.on('server:GetClipboardDone', (clip) => {
    store.dispatch(Actions.apiGetClipboardDone(clip));
  });

  store.dispatch(Actions.apiGetSnipData());
}
