import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {saveSnipEdit} from '../../store/snip.Actions';

const CurrentSnipDivSty = {
  height: 'calc(((100% - 40px) * .4) - 3px)',
  minHeight: '9.5em',
  width: '100%'
};

const CurrentSnipTextAreaSty = {
  backgroundColor: '#213919',
  border: '1px solid #314929',
  color: '#afac87',
  fontSize: '1em',
  height: 'calc(50% - 20px)',
  overflowY: 'auto',
  padding: '5px',
  width: 'calc(100% - 12px)'
};

class SnipsDetailRender extends React.Component {
   render() {
    let snip = this.state.snip.snip;
    let comment = this.state.snip.comment;

    return (
      <div id="CurrentSnipDivSty" style={CurrentSnipDivSty}>
        <textarea
          value={snip}
          onChange={this.handleSnipChange}
          style={CurrentSnipTextAreaSty}
        />
        <textarea
          value={comment}
          onChange={this.handleCommentChange}
          style={CurrentSnipTextAreaSty}
        />
      </div>
    );
  }
}

class SnipsDetail extends SnipsDetailRender {
  state = {snip: {snip: '', comment: ''}};
  componentWillReceiveProps = (nextProps) => {
    if ((nextProps.data.snip != this.state.snip.snip) || (nextProps.data.comment != this.state.snip.comment))
     this.setState({snip: nextProps.data});
  };
  handleSnipChange = (ev) => {
    let newSnip = {snip: ev.target.value, comment: this.state.snip.comment};
    this.setState({snip: newSnip});
    this.props.saveSnipEdit(newSnip);
  };
  handleCommentChange = (ev) => {
    let newSnip = {snip: this.state.snip.snip, comment: ev.target.value};
    this.setState({snip: newSnip});
    this.props.saveSnipEdit(newSnip);
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({saveSnipEdit}, dispatch);
}

export default connect(null, mapDispatchToProps)(SnipsDetail);
