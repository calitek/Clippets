import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {treeActions} from '../../store/tree.Actions';
import {JButton} from 'jms-react-components';

const TreeMenuSty = {
  fontSize: '.9em',
  height: '40px',
  marginBottom: '10px',
  marginTop: '5px',
  textAlign: 'center',
  verticalAlign: 'middle'
};

const newBtn = {buttonid: 'new', icon: 'fa fa-file-text-o fa-2x', style: 'BtnIcon', assignStyle: {color: '#419079'}};
const editBtn = {buttonid: 'edit', icon: 'fa fa-pencil fa-2x', style: 'BtnIcon'};
const moveUpBtn = {buttonid: 'moveUp', icon: 'fa fa-arrow-up fa-2x', style: 'BtnIcon'};
const moveDownBtn = {buttonid: 'moveDown', icon: 'fa fa-arrow-down fa-2x', style: 'BtnIcon'};
const removeBtn = {buttonid: 'remove', icon: 'fa fa-trash-o fa-2x', style: 'BtnIcon'};

const TreeMenu = props => {
  const onSelect = btn => {
    props.treeActions(btn);
  };
  return (
    <div id="TreeMenuSty" style={TreeMenuSty}>
      <JButton btn={newBtn} parentClickHandler={onSelect} />
      &nbsp;
      <JButton btn={editBtn} parentClickHandler={onSelect} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <JButton btn={moveUpBtn} parentClickHandler={onSelect} />
      &nbsp;
      <JButton btn={moveDownBtn} parentClickHandler={onSelect} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <JButton btn={removeBtn} parentClickHandler={onSelect} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({treeActions}, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeMenu);
