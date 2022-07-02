import React from 'react';
import classNames from 'classnames';

import { TicketInterface } from '../../types';
import { Details } from '../Details';

import { defineWord } from '../../helpers/TicketDetailsHelper';

import './TicketDetails.scss';

export const TicketDetails = React.memo(
  ({ ticket, isModal }: { ticket: TicketInterface; isModal: boolean }) => {
    const {
      origin,
      origin_name,
      destination,
      destination_name,
      departure_date,
      departure_time,
      arrival_date,
      arrival_time,
      stops,
    }: TicketInterface = ticket;

    return (
      <div
        className={classNames(
          'TicketDetails',
          'Ticket__section',
          'Ticket__section--details',
          {
            'Ticket__section--details--modal': isModal,
          }
        )}
      >
        <div className="TicketDetails__origin">
          <Details
            time={departure_time}
            place={origin}
            place_name={origin_name}
            date={departure_date}
          />
        </div>

        <div className="TicketDetails__stops-info">
          <p
            className={classNames('TicketDetails__stops-info-text', {
              'TicketDetails__stops-info-text--modal': isModal,
            })}
          >
            {`${stops} ${defineWord(stops)}`}
          </p>

          <div
            className={classNames('TicketDetails__stops-info-decoration', {
              'TicketDetails__stops-info-decoration--modal': isModal,
            })}
          >
            <div className="TicketDetails__stops-info-decoration-item"></div>
            <div className="TicketDetails__stops-info-plane-icon"></div>
          </div>
        </div>

        <div className="TicketDetails__destination">
          <Details
            time={arrival_time}
            place={destination}
            place_name={destination_name}
            date={arrival_date}
          />
        </div>
      </div>
    );
  }
);
