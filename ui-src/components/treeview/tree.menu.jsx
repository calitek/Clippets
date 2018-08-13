import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JButton } from 'jms-react-components';

import { treeActions } from '../../store/tree.Actions';

const TreeMenuSty = {
  fontSize: '.9em',
  height: '40px',
  margin: '10px auto',
  textAlign: 'center',
  verticalAlign: 'middle',
  width: '250px',
};

const newBtn = {
  buttonid: 'new', icon: 'fa fa-file-text-o fa-2x', style: 'BtnIcon',
};
const editBtn = {
  buttonid: 'edit', icon: 'fa fa-pencil fa-2x', style: 'BtnIcon',
};
const moveUpBtn = {
  buttonid: 'moveUp', icon: 'fa fa-arrow-up fa-2x', style: 'BtnIcon',
};
const moveDownBtn = {
  buttonid: 'moveDown', icon: 'fa fa-arrow-down fa-2x', style: 'BtnIcon',
};
const removeBtn = {
  buttonid: 'remove', icon: 'fa fa-trash-o fa-2x', style: 'BtnIcon',
};

const TreeMenu = (props) => {
  const onSelect = (btn) => {
    props.treeActions(btn);
  };
  return (
    <div className="FlexBox FlexJustify" id="TreeMenuSty" style={TreeMenuSty}>
      <JButton btn={newBtn} parentClickHandler={onSelect} />
      <JButton btn={editBtn} parentClickHandler={onSelect} />
      <JButton btn={moveUpBtn} parentClickHandler={onSelect} />
      <JButton btn={moveDownBtn} parentClickHandler={onSelect} />
      <JButton btn={removeBtn} parentClickHandler={onSelect} />
    </div>
  );
};

TreeMenu.propTypes = {
  treeActions: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ treeActions }, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeMenu);
