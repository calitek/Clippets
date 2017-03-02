import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {apiSetClipboard} from '../../store/api.Actions';
import {selectSnipItem} from '../../store/snip.Actions';
import {JButton} from 'jms-react-components';

const SelectSnipButtonSty = {
  backgroundColor: '#213919',
  border: '0px',
  cursor: 'pointer',
  height: '1.5em',
  margin: '0 0px 0 0',
  padding: '0px',
  width: '1.5em'
};

const SnipButtonSty = {
  backgroundColor: 'transparent',
  border: '0px',
  cursor: 'pointer',
  height: '1.8em',
  right: '58px',
  position: 'absolute',
  width: 'calc(70% - 100px)',
  zIndex: '2'
};

const selectSnipBtn = {buttonid: 'selectSnip', reStyle: SelectSnipButtonSty};
const SnipBtn = {buttonid: 'SnipBtn', reStyle: SnipButtonSty};

const SnipDivSty = {
  borderBottom: '1px solid #213919',
  fontSize: '1em',
  height: '1.5em',
  lineHeight: '1.5em',
  margin: '0px',
  overflow: 'hidden',
  paddingTop: '1px',
  textWrap: 'none',
  whiteSpace: 'nowrap'
};

const SelectSnipDivSty = {
  height: '24px',
  paddingLeft: '2px',
  paddingTop: '4px',
  width: '24px'
};

class SnipListItem extends React.Component {
  snipClickHandler = (buttonid) => {
    this.props.selectSnipItem(this.props.snippet);
    if (buttonid == 'SnipBtn') this.props.apiSetClipboard(this.props.snippet.snip);
  };
  render() {
    let SnipSpanSty = {width: 'calc(70% - 142px)'};
    SnipSpanSty.color = (this.props.index === this.props.selectedKey) ? '#b58900' : '#afac87';
    return (
      <div id="SnipDivSty" onClick={this.snipClickHandler} className="FlexBox" style={SnipDivSty}>
        <div id="SelectSnipDivSty" style={SelectSnipDivSty}>
          <JButton btn={selectSnipBtn} parentClickHandler={this.snipClickHandler} />
        </div>
        <span id="SnipSpanSty" style={SnipSpanSty}>{this.props.snippet.snip}</span>
        <JButton btn={SnipBtn} parentClickHandler={this.snipClickHandler} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSnipItem, apiSetClipboard}, dispatch);
}

export default connect(null, mapDispatchToProps)(SnipListItem);
