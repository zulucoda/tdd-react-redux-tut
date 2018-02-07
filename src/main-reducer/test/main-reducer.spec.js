/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/02/07.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import mainReducer from '../main-reducer';

describe('Main Reducer - Unit Test', () => {
  function statBefore() {
    return {};
  }

  it('should return state with all reducers combined', () => {
    const actual = mainReducer(statBefore());

    const expected = {};

    expect(actual).toEqual(expected);
  });
});
