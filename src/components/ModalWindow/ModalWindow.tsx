import React, { useState, useCallback } from 'react';
import classNames from 'classnames';

import { TicketInterface } from '../../types';
import { TicketDetails } from '../TicketDetails';
import { FormBuyTicket } from '../FormBuyTicket';

import './ModalWindow.scss';

export const ModalWindow = React.memo(
  ({
    handleModalVisability,
    ticket,
    preparedPrice,
    currencySign,
  }: {
    handleModalVisability: Function;
    ticket: TicketInterface;
    preparedPrice: number;
    currencySign: string;
  }) => {
    const [isFormActive, setIsFormActive] = useState(true);

    const handleSetFormActive = useCallback(() => {
      setIsFormActive((prevState: boolean): boolean => !prevState);
    }, [setIsFormActive]);

    return (
      <div
        className={classNames('ModalWindow', {
          'ModalWindow--success': !isFormActive,
        })}
      >
        <button
          className={classNames('ModalWindow__close', {
            'ModalWindow__close--active': !isFormActive,
          })}
          title="Закрыть окно"
          onClick={() => {
            handleModalVisability();
          }}
        >
          x
        </button>

        {isFormActive ? (
          <>
            <div className="ModalWindow__ticket-details">
              <div className="ModalWindow__flight-details-wrapper">
                <TicketDetails ticket={ticket} isModal={true} />
              </div>

              <div className="ModalWindow__mobile-flight-details"></div>

              <p className="ModalWindow__price">
                {`Цена билета: ${preparedPrice}${currencySign}`}
              </p>
            </div>

            <FormBuyTicket handleSetFormActive={handleSetFormActive} />
          </>
        ) : (
          <div className="ModalWindow__success-purchase">
            <h3 className="ModalWindow__text-success">
              Билет успешно приобретён
            </h3>
          </div>
        )}
      </div>
    );
  }
);
