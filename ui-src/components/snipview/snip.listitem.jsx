import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JButton } from 'jms-react-components';

import { apiSetClipboard } from '../../store/api.Actions';
import { selectSnipItem } from '../../store/snip.Actions';

const SelectSnipButtonSty = {
  border: '0px',
  borderRadius: '.2em',
  cursor: 'pointer',
  height: '1em',
  margin: '0 0px 0 0',
  padding: '0px',
  width: '1em',
};

const SnipButtonSty = {
  backgroundColor: 'transparent',
  border: '0px',
  cursor: 'pointer',
  height: '1.8em',
  right: '58px',
  position: 'absolute',
  width: 'calc(70% - 100px)',
  zIndex: '2',
};

const selectSnipBtn = { buttonid: 'selectSnip', reStyle: SelectSnipButtonSty };
const SnipBtn = { buttonid: 'SnipBtn', reStyle: SnipButtonSty };

const SnipDivSty = {
  borderBottom: '0px solid #213919',
  fontSize: '1em',
  height: '1.5em',
  lineHeight: '1.5em',
  margin: '0px',
  overflow: 'hidden',
  paddingTop: '1px',
  textWrap: 'none',
  whiteSpace: 'nowrap',
};

const SelectSnipDivSty = {
  height: '24px',
  paddingLeft: '2px',
  paddingTop: '4px',
  width: '24px',
};

const SnipListItem = (props) => {
  const snipClickHandler = (buttonid) => {
    props.selectSnipItem(props.snippet);
    if (buttonid === 'SnipBtn') props.apiSetClipboard(props.snippet.snip);
  };
  const SnipSpanSty = { width: 'calc(70% - 142px)' };
  SnipSpanSty.color = props.index === props.selectedKey ? '#cfc' : '#beb';
  selectSnipBtn.assignStyle = { backgroundColor: props.index === props.selectedKey ? '#4B0082' : '#beb' };
  return (
    <div
      className="FlexBox"
      id="SnipDivSty"
      onClick={snipClickHandler}
      onKeyPress={snipClickHandler}
      role="button"
      style={SnipDivSty}
      tabIndex={0}
    >
      <div id="SelectSnipDivSty" style={SelectSnipDivSty}>
        <JButton btn={selectSnipBtn} parentClickHandler={snipClickHandler} />
      </div>
      <span id="SnipSpanSty" style={SnipSpanSty}>
        {props.snippet.snip}
      </span>
      <JButton btn={SnipBtn} parentClickHandler={snipClickHandler} />
    </div>
  );
};

SnipListItem.propTypes = {
  selectSnipItem: PropTypes.func,
  index: PropTypes.number,
  selectedKey: PropTypes.number,
  snippet: PropTypes.object,
  apiSetClipboard: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectSnipItem, apiSetClipboard }, dispatch);
}

export default connect(null, mapDispatchToProps)(SnipListItem);
