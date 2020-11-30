export function recoveryReviewsFromLocalStorage() {
  if (localStorage.getItem('reviewsObj') === null) {
    return localStorage.setItem('reviewsObj', '[]');
  }
  return JSON.parse(localStorage.getItem('reviewsObj'));
}

export function addReviewInLocalStorage(reviewToAdd) {
  return localStorage.setItem('reviewsObj', JSON.stringify(reviewToAdd));
}
