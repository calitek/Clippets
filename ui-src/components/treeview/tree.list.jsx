import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectTreeNode, setTreeNodeClosed} from '../../store/tree.Actions';
import {JTreeView} from 'jms-react-components';

const TreeList = props => {
  const iconHandler = node => {
    props.setTreeNodeClosed(node);
  };
  const clickHandler = node => {
    props.selectTreeNode(node);
  };
  let options = {
    icon: {sun: 'dev', leaf: 'home', snow: 'sys'},
    typeName: ['node', 'type']
  };
  return (
    <div>
      <JTreeView data={props.treeData} options={options} iconClick={iconHandler} titleClick={clickHandler} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectTreeNode, setTreeNodeClosed}, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeList);
