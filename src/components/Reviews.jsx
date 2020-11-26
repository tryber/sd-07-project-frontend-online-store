import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.addReview = this.addReview.bind(this);
    this.state = {
      reviews: [{ email: 'fulano1', rating: '4', reviewText: 'nada demais' }],
    };
  }

  addReview() {
    const email = document.querySelector('.email').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const reviewText = document.querySelector('.text-review').value;
    const review = { email, rating, reviewText };
    const { reviews } = this.state;
    const joined = reviews.concat(review);
    this.setState({ reviews: joined });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <form>
          <input type="text" className="email" required />
          <fieldset className="rating">
            <legend>Avalie:</legend>
            <label htmlFor="star5" title="5">
              <input type="radio" id="star5" name="rating" value="5" required />
              5 stars
            </label>
            <label htmlFor="star4" title="4">
              <input type="radio" id="star4" name="rating" value="4" required />
              4 stars
            </label>
            <label htmlFor="star3" title="3">
              <input type="radio" id="star3" name="rating" value="3" required />
              3 stars
            </label>
            <label htmlFor="star2" title="2">
              <input type="radio" id="star2" name="rating" value="2" required />
              2 stars
            </label>
            <label htmlFor="star1" title="1">
              <input type="radio" id="star1" name="rating" value="1" required />
              1 star
            </label>
          </fieldset>
          <textarea data-testid="product-detail-evaluation" className="text-review" />
          <button type="button" onClick={ () => this.addReview() }>Avaliar</button>
        </form>
        <div>
          {reviews.map((review) => (
            <div key={ review }>
              <p>{review.email}</p>
              <p>{review.rating}</p>
              <p>{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Reviews;
