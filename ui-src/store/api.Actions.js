
export function apiSetTreeData(data) { return {type: 'ApiSetTreeData', data}; }

export function apiGotTreeData(data) {
  return (dispatch, getState) => {
    dispatch({type: 'ApiGotTreeData', data});
    dispatch({type: 'SelectTreeNode', node: getState().treeData.currentTreeNode});
    dispatch({type: 'SetNextNodeID', nodeID: getState().snipData.nextNodeID});
  };
}

export function apiGetSnipData(data) { return {type: 'ApiGetSnipData', data}; }

export function apiSetSnipData(data) { return {type: 'ApiSetSnipData', data}; }

export function apiGotSnipData(data) {
  return (dispatch) => {
    dispatch({type: 'ApiGotSnipData', data});
    dispatch({type: 'ApiGetTreeData'});
  };
}

let getClipboardPosition;

export function apiGetClipboard(position) {
  getClipboardPosition = position;
  return {type: 'ApiGetClipboard'};
}

export function apiSetClipboard(clip) { return {type: 'ApiSetClipboard', clip}; }

export function apiGotClipboard(clip) { return {type: 'ApiGotClipboard', clip, position: getClipboardPosition}; }
