import {
  possibleFilterValues,
  StopsFilterState,
  stopsFilterActions,
  clearFilters,
  setAllFilters,
  deleteFilter,
  addFilter,
} from '../store/stopsFilter';

export function getIsAllFilters(filters: StopsFilterState): boolean {
  const allFilters = Object.values(possibleFilterValues);

  for (const item of allFilters) {
    if (!filters.includes(item)) {
      return false;
    }
  }

  return true;
}

export const isFilterActive = (
  filters: StopsFilterState,
  filter: string
): boolean => filters.includes(filter);

export const checkAll = (filters: StopsFilterState): boolean =>
  getIsAllFilters(filters);

export const handleAllFilters = (
  filters: StopsFilterState,
  dispatch: Function
) => {
  const isAllFilters = getIsAllFilters(filters);

  isAllFilters
    ? dispatch(stopsFilterActions[clearFilters]())
    : dispatch(stopsFilterActions[setAllFilters]());
};

export const handleSingleFilter = (
  filters: StopsFilterState,
  filter: string,
  dispatch: Function
): void => {
  isFilterActive(filters, filter)
    ? dispatch(stopsFilterActions[deleteFilter](filter))
    : dispatch(stopsFilterActions[addFilter](filter));
};
