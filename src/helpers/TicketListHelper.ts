import { v4 as uuidv4 } from 'uuid';

import { possibleFilterValues, StopsFilterState } from '../store/stopsFilter';
import data from '../data/tickets.json';
import { TicketInterface } from '../types';

const ticketsFromServer = data.tickets.map((item) => ({
  ...item,
  id: uuidv4(),
}));
const { withoutStops, oneStop, twoStops, threeStops } = possibleFilterValues;
const convertedFilters = {
  [withoutStops]: 0,
  [oneStop]: 1,
  [twoStops]: 2,
  [threeStops]: 3,
};

export const prepareTicketsList = (
  filters: StopsFilterState
): TicketInterface[] => {
  return ticketsFromServer.filter((ticket) => {
    for (const filter of filters) {
      if (ticket.stops === convertedFilters[filter]) return true;
    }

    return false;
  });
};
