import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JTreeView } from 'jms-react-components';

import { selectTreeNode, setTreeNodeClosed } from '../../store/tree.Actions';

const TreeList = (props) => {
  const iconHandler = (node) => {
    props.setTreeNodeClosed(node);
  };
  const clickHandler = (node) => {
    props.selectTreeNode(node);
  };
  const options = {
    icon: { sun: 'dev', leaf: 'home', snow: 'sys' },
    typeName: ['node', 'type'],
  };
  return (
    <div>
      <JTreeView data={props.treeData} options={options} iconClick={iconHandler} titleClick={clickHandler} />
    </div>
  );
};

TreeList.propTypes = {
  treeData: PropTypes.array,
  setTreeNodeClosed: PropTypes.func,
  selectTreeNode: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTreeNode, setTreeNodeClosed }, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeList);
