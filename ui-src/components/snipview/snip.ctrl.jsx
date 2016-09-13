import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {apiSetClipboard} from '../../store/api.Actions';
import SnipsBtnsView from './snip.buttons';
import SnipsDetail from './snip.detail';
import SnipsView from './snip.list';

const SnipsCtrlRenderSty = {height: 'calc(100% - 2px)'};

class SnipsCtrl extends React.Component {
  copyHandler = () => { this.props.apiSetClipboard(this.props.currentSnip.snip); }
  render() {
    return (
      <div id="SnipsCtrlRenderSty" style={SnipsCtrlRenderSty}>
        <SnipsBtnsView copyHandler={this.copyHandler} />
        <SnipsView data={this.props.currentSnips} selectedKey={this.props.currentSnipIndex} />
        <SnipsDetail data={this.props.currentSnip} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    currentSnips: store.snipData.currentSnips,
    currentSnip: store.snipData.currentSnip,
    currentSnipIndex: store.snipData.currentSnipIndex
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({apiSetClipboard}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SnipsCtrl);
