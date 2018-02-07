/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/02/07.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//mocks
jest.mock('react-redux', () => require('react-redux-mock'));
