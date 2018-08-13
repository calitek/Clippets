import PropTypes from 'prop-types';
import React from 'react';

import SnipListItem from './snip.listitem';

const SnipsDivSty = {
  cursor: 'pointer',
  height: 'calc(((100% - 40px) * .6) - 5px)',
  minHeight: '13em',
  overflowY: 'auto',
};

const SnipsDivLiSty = { listStyleType: 'none', color: '#afac87' };
const SnipsDivUlSty = { margin: '0px', WebkitPaddingStart: '0px' };

const SnipList = ({ data, selectedKey }) => {
  const list = data.map((snip, index) => {
    const key = index + 1;
    return (
      <li id="SnipsDivLiSty" key={key} style={SnipsDivLiSty}>
        <SnipListItem snippet={snip} index={index} selectedKey={selectedKey} />
      </li>
    );
  });
  return (
    <div id="SnipsDivSty" style={SnipsDivSty}>
      <ul id="SnipsDivUlSty" style={SnipsDivUlSty}>
        {list}
      </ul>
    </div>
  );
};

SnipList.propTypes = {
  data: PropTypes.array,
  selectedKey: PropTypes.number,
};

export default SnipList;
