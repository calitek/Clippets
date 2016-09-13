"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(3);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(0);
  });
  it('checks TreeCtrl count', () => {
    expect(wrapper.find('TreeCtrl').length).to.equal(1);
  });
  it('checks SnipsCtrl count', () => {
    expect(wrapper.find('SnipsCtrl').length).to.equal(1);
  });
});
