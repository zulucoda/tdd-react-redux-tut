/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/02/07.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

const initialState = {
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

const SET_CURRENT_PRODUCT_ACTION = 'SET_CURRENT_PRODUCT_ACTION';

export const selectCurrentProductAction = payload => ({
  type: SET_CURRENT_PRODUCT_ACTION,
  payload
});

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PRODUCT_ACTION:
      return {
        ...state,
        selectedProduct: action.payload
      };

    default:
      return state;
  }
}
