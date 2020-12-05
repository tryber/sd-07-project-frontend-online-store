import React from 'react';
import RadioStars from './RadioStars';

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
          <RadioStars />
          <textarea
            data-testid="product-detail-evaluation"
            className="text-review"
          />
          <button type="button" onClick={() => this.addReview()}>
            Avaliar
          </button>
        </form>
        <div>
          {reviews.map((review) => (
            <div key={review}>
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
