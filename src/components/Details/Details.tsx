import React, { useMemo } from 'react';

import {
  createDateObj,
  defineWeekDay,
  defineMonth,
  returnValidDate,
} from '../../helpers/dateHelper';

import './Details.scss';

interface PropsTypes {
  time: string;
  place: string;
  place_name: string;
  date: string;
}

export const Details = ({ time, place, place_name, date }: PropsTypes) => {
  const validDate = useMemo(() => createDateObj(date), [date]);
  const weekDay = defineWeekDay(validDate);
  const month = defineMonth(validDate);

  return (
    <div className="Details">
      <div className="Details__time-wrapper">
        <time dateTime={time} className="Details__time">
          {time}
        </time>
      </div>

      <div className="Details__additional-info-wrapper">
        <p className="Details__place">{`${place}, ${place_name}`}</p>

        <time dateTime={`${date} ${time}`} className="Details__date">
          {returnValidDate(validDate, month, weekDay)}
        </time>
      </div>
    </div>
  );
};
