import * as apiActions from './api.Actions';

export function saveSnipEdit(item) {
  return (dispatch, getState) => {
    dispatch({type: 'SaveSnipEdit', item});
    dispatch({type: 'ApiSetSnipData', data: {data: getState().snipData.allSnips}});
  };
}

export function selectSnipItem(item) { return {type: 'SelectSnipItem', item}; }

export function snipActions(action) {
  return (dispatch, getState) => {
    switch (action) {
      case 'pasteBefore': dispatch(apiActions.apiGetClipboard('PasteSnipBefore')); break;
      case 'pasteAfter': dispatch(apiActions.apiGetClipboard('PasteSnipAfter')); break;
      case 'newBefore': dispatch({type: 'NewSnipBefore'}); break;
      case 'newAfter': dispatch({type: 'NewSnipAfter'}); break;
      case 'move':
      case 'moveUp': dispatch({type: 'MoveSnipUp'}); break;
      case 'moveDown': dispatch({type: 'MoveSnipDown'}); break;
      case 'remove': dispatch({type: 'RemoveSnip'}); break;
    }
    dispatch({type: 'ApiSetSnipData', data: {data: getState().snipData.allSnips}});
  };
}
