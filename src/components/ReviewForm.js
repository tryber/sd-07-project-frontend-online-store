import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.addNewReview = this.addNewReview.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);

    this.state = {
      email: '',      
      comments: '',
      rating: 0,
    };
  }

  async addNewReview() {
    const { onClick } = this.props;
    await onClick(this.state);
    this.setState({
      email: '',
      rating: 0,
      comments: '',
    });
  }

  updateReview(field, newValue) {
    this.setState({ [field]: newValue });
  }

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
  }

  render() {
    const { email, comments, rating } = this.state;
    return (
      <div>
        <h2>Nos conte o que achou do produto:</h2>
        <input
          type="text"
          placeholder="Email"
          required="required"
          value={ email }
          onChange={ (event) => this.updateReview('email', event.target.value) }
        />        
        <div>
          <ReactStars
            count={ 5 }
            onChange={ this.ratingChanged }
            size={ 24 }
            color2="#ffd700"
            half={ false }
            value={ rating }
          />
        </div>
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
          value={ comments }
          onChange={ (event) => this.updateReview('comments', event.target.value) }
        />
        <button type="button" onClick={ this.addNewReview }>AVALIAR</button>        
      </div>
    );
  }
}

ReviewForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ReviewForm;
