const INCREASE_TOTAL = 'INCREASE_TOTAL';

export const increaseTotal = (number) => {
  console.log(number);
  return ({
    type: INCREASE_TOTAL,
    number,
  });
}
