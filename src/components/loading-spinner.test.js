import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<LoadingSpinner/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
})