const saveRatings = (ratings) => localStorage.setItem('ratings', JSON.stringify(ratings));

export const getRatings = () => JSON.parse(localStorage.getItem('ratings'));

export const addRating = (newRating) => {
  let ratings = [];
  if (getRatings() !== null) {
    ratings = getRatings();
    ratings = [...ratings, newRating];
  } else {
    ratings.push(newRating);
  }
  saveRatings(ratings);
};
