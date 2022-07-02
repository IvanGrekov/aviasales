import { AnyAction } from 'redux';

export const possibleCurrencies = {
  rub: 'Rub',
  usd: 'Usd',
  eur: 'Eur',
};

export type CurrencyState = string;
const initialState: CurrencyState = possibleCurrencies.rub;

export const setCurrency = 'currency/setCurrency';

interface ActionCreatorsTypes {
  [setCurrency]: (value: string) => { type: string; value: string };
}

export const currencyActions: ActionCreatorsTypes = {
  [setCurrency]: (value) => ({
    type: setCurrency,
    value,
  }),
};

const currencyReducer = (
  currency = initialState,
  action: AnyAction
): CurrencyState => {
  const { type, value } = action;

  switch (type) {
    case setCurrency:
      return value;

    default:
      return currency;
  }
};

export default currencyReducer;
