const INCREASE_TOTAL = 'INCREASE_TOTAL';

export const sendTotal = (totalItems) => ({
  type: INCREASE_TOTAL,
  totalItems,
})
