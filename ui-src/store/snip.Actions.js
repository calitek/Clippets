
// export function removeSnips(nodeid) {
//   return (dispatch, getState) => {};
// }

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
      case 'pasteBefore': dispatch({type: 'ApiPasteSnipBefore'}); break;
      case 'pasteAfter': dispatch({type: 'ApiPasteSnipAfter'}); break;
      case 'newBefore': dispatch({type: 'NewSnipBefore'}); break;
      case 'newAfter': dispatch({type: 'NewSnipAfter'}); break;
      case 'remove': dispatch({type: 'RemoveSnip'}); break;
      case 'moveUp': dispatch({type: 'MoveSnipUp'}); break;
      case 'moveDown': dispatch({type: 'MoveSnipDown'}); break;
    }
    dispatch({type: 'ApiSetSnipData', data: {data: getState().snipData.allSnips}});
  };
}
