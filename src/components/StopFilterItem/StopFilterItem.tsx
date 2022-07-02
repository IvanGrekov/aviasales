import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { getters } from '../../store';
import {
  isFilterActive,
  handleSingleFilter,
} from '../../helpers/filtersHelper';

import './StopFilterItem.scss';

export const StopFilterItem = ({ item }: { item: string }) => {
  const filters = useSelector(getters.getStopsFilter);
  const dispatch = useDispatch();

  return (
    <li
      className="StopFilterItem ChooseStopsAmount__item"
      onClick={() => {
        handleSingleFilter(filters, item, dispatch);
      }}
    >
      <div className="StopFilterItem__checkbox">
        <div
          className={classNames('StopFilterItem__checkbox-icon', {
            'StopFilterItem__checkbox-icon--active': isFilterActive(
              filters,
              item
            ),
          })}
        ></div>

        <span className="StopFilterItem__checkbox-text">{item}</span>
      </div>
    </li>
  );
};
