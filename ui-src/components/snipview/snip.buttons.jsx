import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import JButton from '../common/jButton';
import {snipActions} from '../../store/snip.Actions';
import {apiGetClipboard} from '../../store/api.Actions';

const pasteBeforeBtn = {buttonid: 'pasteBefore', icon: 'fa fa-arrow-circle-o-up fa-1x', style: 'BtnImg'};
const pasteAfterBtn = {buttonid: 'pasteAfter', icon: 'fa fa-arrow-circle-o-down fa-1x', style: 'BtnImg'};

const newBeforeBtn = {buttonid: 'newBefore', icon: 'fa fa-arrow-circle-o-up fa-1x', style: 'BtnImg'};
const newAfterBtn = {buttonid: 'newAfter', icon: 'fa fa-arrow-circle-o-down fa-1x', style: 'BtnImg'};

const pasteSnipBtn = {buttonid: 'paste', text: 'Paste', style: 'Btn18'};
const newSnipBtn = {buttonid: 'new', text: 'New', style: 'Btn18'};
const copySnipBtn = {buttonid: 'copy', text: 'Copy'};
const removeSnipBtn = {buttonid: 'remove', text: 'Remove'};

const moveSnipUpBtn = {buttonid: 'moveUp', icon: 'fa fa-arrow-circle-o-up fa-2x', style: 'BtnImg'};
const moveSnipDownBtn = {buttonid: 'moveDown', icon: 'fa fa-arrow-circle-o-down fa-2x', style: 'BtnImg'};

const ButtonAreaSty = {
  fontSize: '.9em',
  height: '40px',
  marginBottom: '10px',
  verticalAlign: 'middle'
};

const HalfButtonAreaSty = {
  height: '40px',
  marginRight: '5px'
};

const HalfStackButtonAreaSty = {height: '20px'};
const HalfImgSpan = {marginLeft: '5px', width: '51px'};
const fullBtnSpanSty = {marginTop: '5px'};

class SnipsBtnsRender extends React.Component {
   render() {
    return (
      <div id="ButtonAreaSty" className="FlexBox" style={ButtonAreaSty} >
        <div id="HalfButtonAreaSty" style={HalfButtonAreaSty} >
          <div id="HalfStackButtonAreaSty" className="FlexBox" style={HalfStackButtonAreaSty} >
            <JButton btn={pasteSnipBtn} parentClickHandler={this.clickHandler} />
            <JButton btn={newSnipBtn} parentClickHandler={this.clickHandler} />
          </div>
          <div id="HalfStackButtonAreaSty" className="FlexBox" style={HalfStackButtonAreaSty}>
            <span id="HalfImgSpan" className="FlexBox" style={HalfImgSpan}>
              <JButton btn={pasteBeforeBtn} parentClickHandler={this.clickHandler} />
              <JButton btn={pasteAfterBtn} parentClickHandler={this.clickHandler} selectedId={this.state.selectedId} />
            </span>
            <span id="HalfImgSpan" className="FlexBox" style={HalfImgSpan}>
              <JButton btn={newBeforeBtn} parentClickHandler={this.clickHandler} />
              <JButton btn={newAfterBtn} parentClickHandler={this.clickHandler} selectedId={this.state.selectedId} />
            </span>
          </div>
        </div>
        <span id="fullBtnSpanSty" style={fullBtnSpanSty}>
          <JButton btn={copySnipBtn} parentClickHandler={this.clickHandler} />
          <JButton btn={removeSnipBtn} parentClickHandler={this.clickHandler} />
        </span>
        <JButton btn={moveSnipUpBtn} parentClickHandler={this.clickHandler} />
        <JButton btn={moveSnipDownBtn} parentClickHandler={this.clickHandler} />
      </div>
    );
  }
}

class SnipsBtns extends SnipsBtnsRender {
  state = {selectedId: 'before'};
  clickHandler = (buttonid) => {
    switch (buttonid) {
      case 'paste':
      case 'pasteBefore': this.props.apiGetClipboard('PasteSnipBefore'); break;
      case 'pasteAfter': this.props.apiGetClipboard('PasteSnipAfter'); break;
      case 'copy': this.props.copyHandler(); break;
      case 'new': this.props.snipActions(buttonid + 'Before'); break;
      default: this.props.snipActions(buttonid); break;
    }
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({snipActions, apiGetClipboard}, dispatch);
}

export default connect(null, mapDispatchToProps)(SnipsBtns);
