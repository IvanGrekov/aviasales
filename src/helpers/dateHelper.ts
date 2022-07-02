import moment from 'moment';
import 'moment/locale/ru';

export const createDateObj = (date: string): Date => {
  const dateItems = date.split('.');

  return new Date(`${dateItems[1]}.${dateItems[0]}.${dateItems[2]}`);
};

export const returnValidDate = (
  date: Date,
  month: string,
  weekDay: string
): string => {
  let result = '';

  result += `${date.getDate()} `;
  result += `${month} ` || '';
  result += date.getFullYear();
  result += `${weekDay ? `, ${weekDay}` : ''}`;

  return result;
};

export const defineWeekDay = (value: Date): string => {
  moment.locale('ru');

  const date = moment(value);
  const result = date.format('llll');

  return result.slice(0, 1).toUpperCase() + result.slice(1, 2);
};

export const defineMonth = (value: Date): string => {
  moment.locale('ru');

  const date = moment(value);
  const result = date.format('MMM');

  if (result === 'май') return 'Мая';

  return result.slice(0, 1).toUpperCase() + result.slice(1, 3);
};
