const saveRatings = (ratings) => localStorage.setItem('ratings', JSON.stringify(ratings));

export const getRatings = () => JSON.parse(localStorage.getItem('ratings'));

export const addRating = (newRating) => {
  let ratings = getRatings();
  ratings = [...ratings, newRating];
  saveRatings(ratings);
};
