import React from 'react';
import {shallow} from 'enzyme';

//import Main from '../main'
import Main from './index'

describe('<Main />', ()=> {
  const wrapper = shallow(<Main />)
  it('should render', ()=> {
      expect(wrapper.hasClass('main')).toBe(true);
  });
});
