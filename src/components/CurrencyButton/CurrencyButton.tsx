import React from 'react';
import classNames from 'classnames';

import { CurrencyState } from '../../store/currency';

import './CurrencyButton.scss';

export const CurrencyButton = ({
  changeSelectedCurrency,
  selectedCurrency,
  currency,
}: {
  changeSelectedCurrency: Function;
  selectedCurrency: CurrencyState;
  currency: CurrencyState;
}) => (
  <button
    className={classNames('CurrencyButton', {
      'CurrencyButton--active': selectedCurrency === currency,
    })}
    onClick={() => {
      changeSelectedCurrency(currency);
    }}
  >
    {currency}
  </button>
);
