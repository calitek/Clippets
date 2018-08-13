import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import TreeList from './tree.list';
import TreeMenu from './tree.menu';
import TreeEdit from './tree.edit';
import TreeNew from './tree.new';

const TreeCtrlRenderSty = { height: 'calc(100% - 10px)' };

function TreeCtrl(props) {
  const {
    treeData,
    currentTreeNode,
    showTreeEdit,
    showTreeNew,
  } = props;
  const hideTreeEdit = !showTreeEdit;
  const hideTreeNew = !showTreeNew;
  return (
    <div id="TreeCtrlSty" style={TreeCtrlRenderSty}>
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
    showTreeNew: store.treeData.showTreeNew,
  };
}

export default connect(mapStateToProps)(TreeCtrl);

TreeCtrl.propTypes = {
  treeData: PropTypes.array,
  currentTreeNode: PropTypes.object,
  showTreeNew: PropTypes.bool,
  showTreeEdit: PropTypes.bool,
};
