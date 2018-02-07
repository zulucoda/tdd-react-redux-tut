/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/02/07.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import productReducer, { selectCurrentProductAction } from '../product-reducer';

describe('Product - Unit Test', () => {
  function stateBefore() {
    return {
      listProducts: [
        {
          name: 'product 1',
          id: 1
        },
        {
          name: 'product 2',
          id: 2
        },
        {
          name: 'product 3',
          id: 3
        },
        {
          name: 'product 4',
          id: 4
        },
        {
          name: 'product 5',
          id: 5
        }
      ],
      selectedProduct: {}
    };
  }

  it('should return initial state', () => {
    const action = {};

    const actual = productReducer(stateBefore(), action);

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });

  it('should return initial state when unknown action', () => {
    const action = { type: 'SOME_UNKNOWN_ACTION' };

    const actual = productReducer(undefined, action);

    const expected = {
      ...stateBefore()
    };

    expect(actual).toEqual(expected);
  });

  describe('selectCurrentProductAction', () => {
    it('should return state with selectedProduct set when selectCurrentProductAction is dispatched', () => {
      const payload = stateBefore().listProducts[2];

      const action = selectCurrentProductAction(payload);

      const actual = productReducer(stateBefore(), action);

      const expected = {
        ...stateBefore(),
        selectedProduct: payload
      };

      expect(actual).toEqual(expected);
    });
  });
});
