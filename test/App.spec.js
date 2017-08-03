import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/App';

describe('Component: App', () => {
  it('should render the App component', () => {
    const wrapper = shallow(
      <App name="Bade" />
    );

    expect(wrapper.find('h1').text()).toEqual('Hello, Bade!');
  });

  it('should run a solid smoke test', () => {
    expect(true).toEqual(false);
  });
});