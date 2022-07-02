import { AnyAction } from 'redux';

export const possibleFilterValues = {
  withoutStops: 'Без пересадок',
  oneStop: '1 пересадка',
  twoStops: '2 пересадки',
  threeStops: '3 пересадки',
};

export type StopsFilterState = string[];

const initialState: StopsFilterState = Object.values(possibleFilterValues);

//#region ActionTypes
export const addFilter = 'stopsFilter/addFilter';
export const deleteFilter = 'stopsFilter/deleteFilter';
export const setAllFilters = 'stopsFilter/setAllFilters';
export const clearFilters = 'stopsFilter/clearFilters';
//#endregion

interface ActionCreatorsTypes {
  [addFilter]: (value: string) => { type: string; value: string };
  [deleteFilter]: (value: string) => { type: string; value: string };
  [setAllFilters]: () => { type: string };
  [clearFilters]: () => { type: string };
}

export const stopsFilterActions: ActionCreatorsTypes = {
  [addFilter]: (value) => ({
    type: addFilter,
    value,
  }),
  [deleteFilter]: (value) => ({
    type: deleteFilter,
    value,
  }),
  [setAllFilters]: () => ({
    type: setAllFilters,
  }),
  [clearFilters]: () => ({
    type: clearFilters,
  }),
};

const stopsFilterReducer = (
  stopsFilter = initialState,
  action: AnyAction
): StopsFilterState => {
  const { type, value } = action;

  switch (type) {
    case addFilter:
      if (stopsFilter.includes(value)) {
        return stopsFilter;
      }

      return [...stopsFilter, value];

    case deleteFilter:
      return stopsFilter.filter((item) => item !== value);

    case setAllFilters:
      return Object.values(possibleFilterValues);

    case clearFilters:
      return [];

    default:
      return stopsFilter;
  }
};

export default stopsFilterReducer;
