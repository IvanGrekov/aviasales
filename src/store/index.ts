import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import currencyReducer, { CurrencyState } from './currency';
import stopsFilterReducer, { StopsFilterState } from './stopsFilter';

interface initialState {
  currency: CurrencyState;
  stopsFilter: StopsFilterState;
}

export const getters = {
  getCurrency: (state: initialState): CurrencyState => state.currency,
  getStopsFilter: (state: initialState): StopsFilterState => state.stopsFilter,
};

const rootReducer = combineReducers({
  currency: currencyReducer,
  stopsFilter: stopsFilterReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
