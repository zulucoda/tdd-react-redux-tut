/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/02/07.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

import { createStore, applyMiddleware, compose } from 'redux';
import mainReducer from '../main-reducer/main-reducer';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  mainReducer,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk))
);
