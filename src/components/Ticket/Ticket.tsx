import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { TicketInterface } from '../../types';
import { TicketDetails } from '../TicketDetails';
import { ModalWindow } from '../ModalWindow';
import { Loader } from '../Loader';

import { getters } from '../../store';
import { possibleCurrencies } from '../../store/currency';
import { getUsdRate, getEurRate } from '../../api/CurrencyRates';

import './Ticket.scss';

//#region Constants
const { rub, usd, eur } = possibleCurrencies;

type ExchangeRates = {
  [key: string]: number;
};

const initialExhangeRates: ExchangeRates = {
  [rub]: 1,
  [usd]: NaN,
  [eur]: NaN,
};

const currencySigns = {
  [rub]: '₽',
  [usd]: '$',
  [eur]: '€',
};
//#endregion

export const Ticket = React.memo(({ ticket }: { ticket: TicketInterface }) => {
  const [modalVisability, setModalVisability] = useState(false);
  const [exchangeRates, setExchangeRates] = useState(initialExhangeRates);

  const { price }: TicketInterface = ticket;
  const currentCurrency = useSelector(getters.getCurrency);
  const currencySign = useMemo(
    () => currencySigns[currentCurrency],
    [currentCurrency]
  );
  const preparedPrice = useMemo(
    () => Math.ceil(+(price / exchangeRates[currentCurrency])) || NaN,
    [currentCurrency, exchangeRates, price]
  );

  useEffect(() => {
    (async function () {
      const usdRate = await getUsdRate();
      const eurRate = await getEurRate();

      setExchangeRates((prevState) => ({
        ...prevState,
        [usd]: usdRate,
        [eur]: eurRate,
      }));
    })();
  }, []);

  const handleModalVisability = useCallback(() => {
    setModalVisability((state) => !state);
  }, [setModalVisability]);

  return (
    <>
      <div className="Ticket">
        <div className="Ticket__section Ticket__section--main-info">
          <div className="Ticket__carrier-logo"></div>

          <button
            className="Ticket__price"
            disabled={isNaN(preparedPrice)}
            onClick={() => {
              handleModalVisability();
            }}
          >
            {isNaN(preparedPrice) ? (
              <Loader />
            ) : (
              <>
                Купить
                <br />
                за {preparedPrice}
                {currencySign}
              </>
            )}
          </button>
        </div>

        <TicketDetails ticket={ticket} isModal={false} />
      </div>

      {modalVisability && (
        <div className="Ticket__modal-wrapper">
          <ModalWindow
            handleModalVisability={handleModalVisability}
            ticket={ticket}
            preparedPrice={preparedPrice}
            currencySign={currencySign}
          />
        </div>
      )}
    </>
  );
});
