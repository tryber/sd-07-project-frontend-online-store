import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.css';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.ratingChange = this.ratingChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.saveRating = this.saveRating.bind(this);
    this.state = {
      ratingStar: 0,
      email: '',
      comment: '',
      numberOfRatings: localStorage.length,
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem('1'));
  }

  onChangeText({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveRating() {
    const { ratingStar, email, comment, numberOfRatings } = this.state;
    localStorage.setItem(numberOfRatings + 1, `${ratingStar}/${email}/${comment}`);
  }

  ratingChange(rating) {
    this.setState({ ratingStar: rating });
  }

  render() {
    const stars = 5;
    const { ratingStar, email, comment } = this.state;
    return (
      <form className="rating">
        <div className="rating__field">
          <input
            className="rating__field--email"
            type="text"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ this.onChangeText }
            required
          />
          {[...Array(stars)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={ ratingValue } htmlFor={ ratingValue }>
                <input
                  id={ ratingValue }
                  className="rating__field--star"
                  type="radio"
                  name="rating"
                  onClick={ () => this.ratingChange(ratingValue) }
                />
                <FaStar
                  color={ ratingValue <= ratingStar ? '#ffc107' : '#e4e5e9' }
                  className="star"
                  size={ 20 }
                />
              </label>
            );
          })}
        </div>
        <textarea
          name="comment"
          value={ comment }
          onChange={ this.onChangeText }
          cols="30"
          rows="10"
          data-testid="product-detail-evaluation"
        />
        <button type="submit" onClick={ this.saveRating }>Avaliar</button>
      </form>
    );
  }
}

export default Rating;
