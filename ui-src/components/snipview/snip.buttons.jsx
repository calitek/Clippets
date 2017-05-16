import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {JButton} from 'jms-react-components';
import {snipActions} from '../../store/snip.Actions';
import {apiGetClipboard} from '../../store/api.Actions';

const pasteSnipBtn = {buttonid: 'paste', icon: 'fa fa-clipboard fa-2x', style: 'BtnIcon'};
const pasteBeforeBtn = {buttonid: 'pasteBefore', icon: 'fa fa-arrow-circle-o-up fa-2x', style: 'BtnIcon'};
const pasteAfterBtn = {buttonid: 'pasteAfter', icon: 'fa fa-arrow-circle-o-down fa-2x', style: 'BtnIcon'};

const newSnipBtn = {buttonid: 'new', icon: 'fa fa-file-text-o fa-2x', style: 'BtnIcon', assignStyle: {color: '#419079'}};
const newBeforeBtn = {buttonid: 'newBefore', icon: 'fa fa-arrow-circle-o-up fa-2x', style: 'BtnIcon'};
const newAfterBtn = {buttonid: 'newAfter', icon: 'fa fa-arrow-circle-o-down fa-2x', style: 'BtnIcon'};

const copySnipBtn = {buttonid: 'copy', icon: 'fa fa-files-o fa-2x', style: 'BtnIcon'};

const moveSnipUpBtn = {buttonid: 'moveUp', icon: 'fa fa-arrow-circle-o-up fa-2x', style: 'BtnIcon'};
const moveSnipDownBtn = {buttonid: 'moveDown', icon: 'fa fa-arrow-circle-o-down fa-2x', style: 'BtnIcon'};

const removeSnipBtn = {buttonid: 'remove', icon: 'fa fa-trash-o fa-2x', style: 'BtnIcon'};

const ButtonAreaSty = {
  fontSize: '.9em',
  height: '40px',
  marginBottom: '10px',
  marginTop: '5px',
  verticalAlign: 'middle'
};

const SnipsBtns = props => {
  const clickHandler = buttonid => {
    switch (buttonid) {
      case 'paste':
      case 'pasteBefore':
        props.apiGetClipboard('PasteSnipBefore');
        break;
      case 'pasteAfter':
        props.apiGetClipboard('PasteSnipAfter');
        break;
      case 'copy':
        props.copyHandler();
        break;
      case 'new':
        props.snipActions(buttonid + 'Before');
        break;
      default:
        props.snipActions(buttonid);
        break;
    }
  };
  return (
    <div id="ButtonAreaSty" style={ButtonAreaSty}>
      <JButton btn={copySnipBtn} parentClickHandler={clickHandler} />
      &nbsp;&nbsp;&nbsp;&nbsp;

      <JButton btn={pasteSnipBtn} parentClickHandler={clickHandler} />
      <JButton btn={pasteBeforeBtn} parentClickHandler={clickHandler} />
      <JButton btn={pasteAfterBtn} parentClickHandler={clickHandler} />
      &nbsp;&nbsp;&nbsp;&nbsp;

      <JButton btn={newSnipBtn} parentClickHandler={clickHandler} />
      <JButton btn={newBeforeBtn} parentClickHandler={clickHandler} />
      <JButton btn={newAfterBtn} parentClickHandler={clickHandler} />
      &nbsp;&nbsp;&nbsp;&nbsp;

      <JButton btn={moveSnipUpBtn} parentClickHandler={clickHandler} />
      <JButton btn={moveSnipDownBtn} parentClickHandler={clickHandler} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <JButton btn={removeSnipBtn} parentClickHandler={clickHandler} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({snipActions, apiGetClipboard}, dispatch);
}

export default connect(null, mapDispatchToProps)(SnipsBtns);
