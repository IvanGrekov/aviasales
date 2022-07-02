import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CurrencyButton } from '../CurrencyButton';

import { getters } from '../../store';
import {
  possibleCurrencies,
  currencyActions,
  setCurrency,
  CurrencyState,
} from '../../store/currency';

import './ChooseCurrency.scss';

export const ChooseCurrency = () => {
  const selectedCurrency = useSelector(getters.getCurrency);
  const dispatch = useDispatch();

  const changeSelectedCurrency = useCallback(
    (value: CurrencyState) => {
      dispatch(currencyActions[setCurrency](value));
    },
    [dispatch]
  );

  const currencies = Object.values(possibleCurrencies);

  return (
    <div className="ChooseCurrency">
      <h3 className="ChooseCurrency__title">Валюта</h3>

      <div className="ChooseCurrency__selectors">
        {currencies.map((currency) => (
          <CurrencyButton
            key={currency}
            changeSelectedCurrency={changeSelectedCurrency}
            selectedCurrency={selectedCurrency}
            currency={currency}
          />
        ))}
      </div>
    </div>
  );
};
