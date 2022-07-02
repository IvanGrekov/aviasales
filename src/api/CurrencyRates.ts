const getRates = () => {
  const BASE_URL = 'https://www.cbr-xml-daily.ru/latest.js';

  return fetch(BASE_URL)
    .then((response) => response.json())
    .catch(console.log);
};

export const getUsdRate = (): Promise<number> => {
  return getRates()
    .then((result) => {
      return 1 / result.rates.USD;
    })
    .catch((error) => {
      console.error(error);

      return NaN;
    });
};

export const getEurRate = (): Promise<number> => {
  return getRates()
    .then((result) => {
      return 1 / result.rates.EUR;
    })
    .catch((error) => {
      console.error(error);

      return NaN;
    });
};
