import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TreeDetail from './tree.detail';
import {saveTreeNew, treeActions} from '../../store/tree.Actions';
import {JButton} from 'jms-react-components';

const newBeforeBtn = {buttonid: 'before', text: 'New Before', assignStyle: {width: '92px'}};
const newAfterBtn = {buttonid: 'after', text: 'New After', assignStyle: {width: '92px'}};
const newChildBtn = {buttonid: 'child', text: 'New Child', assignStyle: {width: '92px'}};
const cancelNewBtn = {buttonid: 'cancel', text: 'Cancel', assignStyle: {width: '92px'}};

class TreeNew extends React.Component {
  state = {treeNode: {nodeid: '', title: '', type: 'dev', selected: false, children: []}};
  clickHandler = buttonid => {
    switch (buttonid) {
      case 'before':
      case 'after':
      case 'child':
        this.props.saveTreeNew(this.state.treeNode, buttonid);
        break;
      case 'cancel':
        this.props.treeActions('cancelNew');
        break;
    }
  };
  handleChange = (field, value) => {
    let node = this.state.treeNode;
    if (field == 'title') node.title = value;
    if (field == 'type') node.type = value;
    this.setState({treeNode: node});
  };
  render() {
    if (this.props.hide) return null;
    return (
      <div id="treeNewEdit">
        <div id="buttonArea">
          <div id="halfNewButtonArea">
            <div id="topButtonArea">
              <JButton btn={newBeforeBtn} parentClickHandler={this.clickHandler} />
              <JButton btn={newAfterBtn} parentClickHandler={this.clickHandler} />
            </div>
            <div id="bottomButtonArea">
              <JButton btn={newChildBtn} parentClickHandler={this.clickHandler} />
              <JButton btn={cancelNewBtn} parentClickHandler={this.clickHandler} />
            </div>
          </div>
        </div>
        <TreeDetail treeNode={this.state.treeNode} name="newNode" handleChange={this.handleChange} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({saveTreeNew, treeActions}, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeNew);
