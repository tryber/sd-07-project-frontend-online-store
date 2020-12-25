import React from 'react';
import PropTypes from 'prop-types';

class Evaluations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addEvaluation = this.addEvaluation.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
  }

  componentDidMount() {
    this.renderReviews();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addEvaluation() {
    const productList = JSON.parse(localStorage.getItem('cartItems'));
    const { itemId } = this.props;
    const { rating, comment } = this.state;
    if (productList) {
      const index = productList
        .findIndex((item) => item.id === itemId);
      productList[index].evaluation.push(
        { reviewTxt: comment, ratingNumber: rating },
      );
      localStorage.setItem('cartItems', JSON.stringify(productList));
    }
  }

  renderReviews() {
    const productList = JSON.parse(localStorage.getItem('cartItems'));
    const zero = 0;
    const { itemId } = this.props;
    if (productList) {
      const index = productList
        .findIndex((item) => item.id === itemId);
      if (index !== null && index !== undefined && index >= zero) {
        return (
          <div>
            {
              productList[index].evaluation.map((review) => (
                <div key={ Math.random() }>
                  <p>
                    Comentário:
                    { review.reviewTxt }
                  </p>
                  <p>
                    Nota:
                    { review.ratingNumber }
                  </p>
                </div>
              ))
            }
          </div>
        );
      }
      return <h3>Para adicionar um comentário, o item deve estar no carrinho.</h3>;
    }
  }

  render() {
    const { comment } = this.state;
    return (
      <form>
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Adicione um comentário (Opcional)"
          name="comment"
          value={ comment }
          onChange={ this.handleChange }
        />
        <div>
          <label htmlFor="rating-0">
            <input
              id="rating-0"
              type="radio"
              value="0"
              name="rating"
              onChange={ this.handleChange }
            />
            0
          </label>
          <label htmlFor="rating-1">
            <input
              id="rating-1"
              type="radio"
              value="1"
              name="rating"
              onChange={ this.handleChange }
            />
            1
          </label>
          <label htmlFor="rating-2">
            <input
              id="rating-2"
              type="radio"
              value="2"
              name="rating"
              onChange={ this.handleChange }
            />
            2
          </label>
          <label htmlFor="rating-3">
            <input
              id="rating-3"
              type="radio"
              value="3"
              name="rating"
              onChange={ this.handleChange }
            />
            3
          </label>
          <label htmlFor="rating-4">
            <input
              id="rating-4"
              type="radio"
              value="4"
              name="rating"
              onChange={ this.handleChange }
            />
            4
          </label>
          <label htmlFor="rating-5">
            <input
              id="rating-5"
              type="radio"
              value="5"
              name="rating"
              onChange={ this.handleChange }
            />
            5
          </label>
        </div>
        <button
          onClick={ this.addEvaluation }
          type="button"
        >
          Adicionar Comentário
        </button>
        <div>
          <div>
            <h3>Comentários</h3>
            { this.renderReviews() }
          </div>
        </div>
      </form>
    );
  }
}

export default Evaluations;

Evaluations.propTypes = { itemId: PropTypes.string }.isRequired;
