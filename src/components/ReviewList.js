import React, { Component } from 'react';
import ReviewForm from '../components/ReviewForm';
import reviews from '../services/reviews';

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      reviewsObj: reviews,
    }

  }

  onClick(reviewData) {
    const currentReviews = this.state.reviewsObj;
    const nextId = currentReviews[currentReviews.length - 1].id + 1;
    const newReview = { ...reviewData, id: nextId };    
    this.setState({ reviewsObj: [...this.state.reviewsObj, newReview] });
}

  render() {  
    const { reviewsObj } = this.state;

    return (      
      <div>
        <ReviewForm onClick={this.onClick} />
        <div>
          {reviewsObj.map(({email, rating, comments, id}) =>
            <div key={id}>
              <span>{email}</span>
              <span>{rating}</span>
              <p>{comments}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ReviewList;