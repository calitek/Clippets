import * as Actions from './api.Actions';

export function ipcMiddleware(store) {
  return next => (action) => {
    if (ipc) {
      switch (action.type) {
        case 'ApiGetTreeData':
          ipc.send('client:GetTreeData', {});
          break;
        case 'ApiSetTreeData':
          ipc.send('client:SetTreeData', action.data);
          break;
        case 'ApiGetSnipData':
          ipc.send('client:GetSnipData', action.data);
          break;
        case 'ApiSetSnipData':
          ipc.send('client:SetSnipData', action.data);
          break;
        case 'ApiGetClipboard':
          store.dispatch(Actions.apiGetClipboardDone(clipboard.readText()));
          break;
        case 'ApiSetClipboard':
          clipboard.writeText(action.clip);
          break;
        default: break;
      }
    }
    return next(action);
  };
}

export function startIpc(store) {
  ipc.on('server:GetTreeDataDone', (event, data) => {
    store.dispatch(Actions.apiGetTreeDataDone(data));
  });

  ipc.on('server:GetSnipDataDone', (event, data) => {
    store.dispatch(Actions.apiGetSnipDataDone(data));
  });
}
