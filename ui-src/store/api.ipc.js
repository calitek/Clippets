import * as Actions from './api.Actions';

export function ipcMiddleware(store) {
  return (next) => (action) => {
    if (ipc) {
      switch (action.type) {
        case 'ApiGetTreeData': ipc.send('client:GetTreeData', {}); break;
        case 'ApiSetTreeData': ipc.send('client:SetTreeData', action.data); break;
        case 'ApiGetSnipData': ipc.send('client:GetSnipData', action.data); break;
        case 'ApiSetSnipData': ipc.send('client:SetSnipData', action.data); break;
        case 'ApiGetClipboard': store.dispatch(Actions.gotClipboard(clipboard.readText())); break;
        case 'ApiSetClipboard': clipboard.writeText(action.clip); break;
      }
    }
    return next(action);
  };
}

export function startIpc(store) {
  ipc.on('server:GotTreeData', (event, data) => {
    store.dispatch(Actions.apiGotTreeData(data));
  });

  ipc.on('server:GotSnipData', (event, data) => {
    store.dispatch(Actions.apiGotSnipData(data));
  });

  store.dispatch(Actions.apiGetSnipData());
}
