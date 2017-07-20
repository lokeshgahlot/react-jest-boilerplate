// @flow
import React from 'react';
import {shallow} from 'enzyme';

import Main from 'components/main';

describe('<Main />', ()=> {
  const wrapper = shallow(<Main />)
  it('should render', ()=> {
      expect(wrapper.hasClass('main')).toBe(true);
  });
});
