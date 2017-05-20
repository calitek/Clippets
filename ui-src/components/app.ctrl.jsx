import React from 'react';

import TreeCtrl from './treeview/tree.ctrl';
import SnipsCtrl from './snipview/snip.ctrl';

const AppCtrlSty = {
  height: '100%',
  padding: '0'
};

const TreeCtrlSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 10px)',
  overflow: 'auto',
  paddingLeft: '0px',
  width: '30%'
};

const SnipsCtrlSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 10px)',
  overflow: 'hidden',
  padding: '0px',
  width: 'calc(70% - 35px)'
};

export default () => {
  return (
    <div id="AppCtrlSty" className="FlexBox" style={AppCtrlSty}>
      <div id="TreeCtrlSty" style={TreeCtrlSty}>
        <TreeCtrl />
      </div>
      <div id="SnipsCtrlSty" style={SnipsCtrlSty}>
        <SnipsCtrl />
      </div>
    </div>
  );
};
