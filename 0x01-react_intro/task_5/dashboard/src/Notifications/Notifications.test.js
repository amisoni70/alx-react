import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
   const wrapper = shallow(<Notifications />);
   expect(wrapper.exists()).toBe(true);
  });
  
  it('renders three list items', () => {
   const wrapper = shallow(<Notifications />);
   expect(wrapper.find('li')).toHaveLength(3);
  });

   it('renders here is the list of Notifications', () => {
   const text = 'Here is the list of notifications';
   const wrapper = shallow(<Notifications />);
   expect(wrapper.find('p').text()).toBe(text);
  });
});
