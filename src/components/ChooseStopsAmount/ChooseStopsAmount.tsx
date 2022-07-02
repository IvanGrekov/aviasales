import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { StopFilterItem } from '../StopFilterItem';

import { getters } from '../../store';
import { possibleFilterValues } from '../../store/stopsFilter';
import { checkAll, handleAllFilters } from '../../helpers/filtersHelper';

import './ChooseStopsAmount.scss';

export const ChooseStopsAmount = () => {
  const filters = useSelector(getters.getStopsFilter);
  const dispatch = useDispatch();

  const stopsOptions = Object.values(possibleFilterValues);

  return (
    <div className="ChooseStopsAmount">
      <h3 className="ChooseStopsAmount__title">Количество пересадок</h3>

      <ul>
        <li
          className="ChooseStopsAmount__item"
          onClick={() => {
            handleAllFilters(filters, dispatch);
          }}
        >
          <div className="ChooseStopsAmount__checkbox">
            <div
              className={classNames('ChooseStopsAmount__checkbox-icon', {
                'ChooseStopsAmount__checkbox-icon--active': checkAll(filters),
              })}
            ></div>

            <span className="ChooseStopsAmount__checkbox-text">Все</span>
          </div>
        </li>

        {stopsOptions.map((item) => (
          <StopFilterItem key={item} item={item} />
        ))}
      </ul>
    </div>
  );
};
