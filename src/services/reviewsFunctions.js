

localStorage.setItem('reviews', JSON.stringify(data));

const readReviews = () => JSON.parse(localStorage.getItem('reviews'));

const saveMovies = (reviews) => localStorage.setItem('reviews', JSON.stringify(reviews));

