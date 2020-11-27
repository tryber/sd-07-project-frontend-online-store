import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.ratingChange = this.ratingChange.bind(this);
    this.state = {
      rating: 0,
    };
  }

  ratingChange(rating) {
    this.setState({ rating });
  }

  render() {
    const stars = 5;
    return (
      <div className="rating">
        <div className="field">
          <input className="field__input" type="text" placeholder="Email" />
          {[...Array(stars)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={ ratingValue } htmlFor="rating">
                <input
                  type="radio"
                  name="rating"
                  onClick={ () => this.ratingChange(ratingValue) }
                />
                <FaStar />
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Rating;
