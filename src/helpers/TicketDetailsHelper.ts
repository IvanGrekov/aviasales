export const defineWord = (number: number): string => {
  if (number === 1) return 'пересадка';

  if (number > 1 && number < 5) return 'пересадки';

  return 'пересадок';
};
