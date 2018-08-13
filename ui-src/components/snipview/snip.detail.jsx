import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveSnipEdit } from '../../store/snip.Actions';

const CurrentSnipDivSty = {
  height: 'calc(((100% - 40px) * .4) - 3px)',
  minHeight: '9.5em',
  width: '100%',
};

const CurrentSnipTextAreaSty = {
  backgroundColor: '#242',
  border: '1px solid #314929',
  borderRadius: '10px',
  color: '#beb',
  fontSize: '1em',
  height: 'calc(50% - 20px)',
  overflowY: 'auto',
  padding: '5px',
  width: 'calc(100% - 12px)',
};

class SnipsDetail extends React.Component {
  state = { snip: { snip: '', comment: '' } };
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.data.snip !== this.state.snip.snip || nextProps.data.comment !== this.state.snip.comment) this.setState({ snip: nextProps.data });
  };
  handleSnipChange = (ev) => {
    const newSnip = { snip: ev.target.value, comment: this.state.snip.comment };
    this.setState({ snip: newSnip });
    this.props.saveSnipEdit(newSnip);
  };
  handleCommentChange = (ev) => {
    const newSnip = { snip: this.state.snip.snip, comment: ev.target.value };
    this.setState({ snip: newSnip });
    this.props.saveSnipEdit(newSnip);
  };
  render() {
    const { comment, snip } = this.state.snip;

    return (
      <div id="CurrentSnipDivSty" style={CurrentSnipDivSty}>
        <textarea value={snip} onChange={this.handleSnipChange} style={CurrentSnipTextAreaSty} />
        <textarea value={comment} onChange={this.handleCommentChange} style={CurrentSnipTextAreaSty} />
      </div>
    );
  }
}

SnipsDetail.propTypes = {
  data: PropTypes.object,
  saveSnipEdit: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveSnipEdit }, dispatch);
}

export default connect(null, mapDispatchToProps)(SnipsDetail);
