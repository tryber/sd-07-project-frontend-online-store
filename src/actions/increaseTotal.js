const INCREASE_TOTAL = 'INCREASE_TOTAL';

export const increaseTotal = (number) => {
  return ({
    type: INCREASE_TOTAL,
    number,
  });
}
