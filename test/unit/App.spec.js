import React from 'react';
import App from '../../src/App.js';

describe('App item', () => {
  const wrapper = shallow(<App />);

  it('should be a div item', () => {
    expect(wrapper.type()).to.eql('div');
  });

});
