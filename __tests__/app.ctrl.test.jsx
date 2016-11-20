'use strict';

import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

import AppCtrl from '../ui-src/components/app.ctrl';

const mockStore = configureMockStore();

const initialSnipState = {
  allSnips: [],
  currentSnips: [],
  currentSnip: {},
  currentSnipIndex: 0,
  nextNodeID: 0
};

const initialTreeState = {
  newNodeID: 0,
  treeData: [{}],
  currentTreeNode: {title: 'not selected'},
  showTreeEdit: false,
  showTreeNew: false
};

const initialState = {
  snipData: initialSnipState,
  treeData: initialTreeState
};

describe('shallow(<AppCtrl />)', () => {
  let store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <AppCtrl />
    </Provider>
  );
  expect(wrapper.find(AppCtrl).length).to.equal(1);
  const container = wrapper.find(AppCtrl);
  it('checks div count', () => {
    expect(container.find('div').length).to.equal(20);
  });
  it('checks br count', () => {
    expect(container.find('br').length).to.equal(0);
  });
  it('checks TreeCtrl count', () => {
    expect(container.find('TreeCtrl').length).to.equal(1);
  });
  it('checks SnipsCtrl count', () => {
    expect(container.find('SnipsCtrl').length).to.equal(1);
  });
});
