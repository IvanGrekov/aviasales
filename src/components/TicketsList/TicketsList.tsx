import React from 'react';
import { useSelector } from 'react-redux';

import { Ticket } from '../Ticket';

import { getters } from '../../store';
import { prepareTicketsList } from '../../helpers/TicketListHelper';

import './TicketsList.scss';

export const TicketsList = () => {
  const filters = useSelector(getters.getStopsFilter);
  const preparedTicketsList = prepareTicketsList(filters);

  return (
    <div className="TicketsList">
      <ul className="TicketsList__list">
        {preparedTicketsList.length === 0 ? (
          <p className="TicketsList__not-found">Tickets not found</p>
        ) : (
          preparedTicketsList.map((ticket) => (
            <li className="TicketsList__item" key={ticket.id}>
              <Ticket ticket={ticket} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
