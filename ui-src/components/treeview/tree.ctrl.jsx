import React from 'react';
import {connect} from 'react-redux';

import TreeList from './tree.list';
import TreeMenu from './tree.menu';
import TreeEdit from './tree.edit';
import TreeNew from './tree.new';

const TreeCtrlRenderSty = {height: 'calc(100% - 2px)'};

function TreeCtrl({treeData, currentTreeNode, showTreeEdit, showTreeNew}) {
  let hideTreeEdit = !showTreeEdit;
  let hideTreeNew = !showTreeNew;
  return (
    <div id="TreeCtrlRenderSty" style={TreeCtrlRenderSty}>
      <TreeMenu />
      <TreeList treeData={treeData} />
      <TreeEdit treeNode={currentTreeNode} hide={hideTreeEdit} />
      <TreeNew hide={hideTreeNew} />
    </div>
  );
}

function mapStateToProps(store) {
  return {
    treeData: store.treeData.treeData,
    currentTreeNode: store.treeData.currentTreeNode,
    showTreeEdit: store.treeData.showTreeEdit,
    showTreeNew: store.treeData.showTreeNew
  };
}

export default connect(mapStateToProps)(TreeCtrl);
