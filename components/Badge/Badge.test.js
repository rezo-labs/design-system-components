import React from 'react';
import { shallow } from 'enzyme';

import Badge from './Badge';

describe('Badge', () => {
    it('Render as expected', () => {
        const wrapper = shallow(<Badge variant="primary" size="small" />);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
});
