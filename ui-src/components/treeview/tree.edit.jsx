import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JButton } from 'jms-react-components';

import TreeDetail from './tree.detail';
import { treeActions, saveTreeEdit } from '../../store/tree.Actions';

const saveEditBtn = { buttonid: 'save', text: 'Save' };
const cancelEditBtn = { buttonid: 'cancel', text: 'Cancel' };

class TreeEdit extends React.Component {
  state = {
    treeNode: {
      nodeid: '', children: [], title: '', type: '',
    },
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({ treeNode: nextProps.treeNode });
  };

  clickHandler = (buttonid) => {
    const node = this.state.treeNode;
    switch (buttonid) {
      case 'save':
        this.props.saveTreeEdit(node);
        break;
      case 'cancel':
        this.props.treeActions('cancelEdit');
        break;
      default: break;
    }
  };

  handleChange = (field, value) => {
    const node = this.state.treeNode;
    if (field === 'title') node.title = value;
    if (field === 'type') node.type = value;
    this.setState({ treeNode: node });
  };

  render() {
    if (this.props.hide) return null;
    return (
      <div id="treeNewEdit">
        <div id="buttonArea">
          <JButton btn={saveEditBtn} parentClickHandler={this.clickHandler} />
          <JButton btn={cancelEditBtn} parentClickHandler={this.clickHandler} />
        </div>
        <TreeDetail treeNode={this.state.treeNode} name="editNode" handleChange={this.handleChange} />
      </div>
    );
  }
}

TreeEdit.propTypes = {
  treeNode: PropTypes.object,
  saveTreeEdit: PropTypes.func,
  treeActions: PropTypes.func,
  hide: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ treeActions, saveTreeEdit }, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeEdit);
