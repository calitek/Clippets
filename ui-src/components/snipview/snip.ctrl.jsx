import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { apiSetClipboard } from '../../store/api.Actions';
import SnipsBtnsView from './snip.buttons';
import SnipsDetail from './snip.detail';
import SnipsView from './snip.list';

const SnipsCtrlRenderSty = { height: 'calc(100% - 2px)' };

const SnipsCtrl = (props) => {
  const copyHandler = () => {
    props.apiSetClipboard(props.currentSnip.snip);
  };
  return (
    <div id="SnipsCtrlRenderSty" style={SnipsCtrlRenderSty}>
      <SnipsBtnsView copyHandler={copyHandler} />
      <SnipsView data={props.currentSnips} selectedKey={props.currentSnipIndex} />
      <SnipsDetail data={props.currentSnip} />
    </div>
  );
};

SnipsCtrl.propTypes = {
  apiSetClipboard: PropTypes.func,
  currentSnips: PropTypes.array,
  currentSnip: PropTypes.object,
  currentSnipIndex: PropTypes.number,
};

function mapStateToProps(store) {
  return {
    currentSnips: store.snipData.currentSnips,
    currentSnip: store.snipData.currentSnip,
    currentSnipIndex: store.snipData.currentSnipIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ apiSetClipboard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SnipsCtrl);
