import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import DefaultWrapper from '../../components/DefaultWrapper';
import CartIcon from '../../components/CartIcon';
import ShoppingDetails from '../../components/ShoppingDetails';

const detailPage = {
  title: 'Detalhes do produto',
  showHeaderButton: true,
  closeButtonLink: '/',
};

function DetailPage(props) {
  const { cartItems, modifyCart, location } = props;

  const { state: item } = location;
  const { title, thumbnail } = item;
  const [ratings, setRatings] = useState([]);

  const onSubmit = (data) => {
    setRatings([...ratings, data]);
  };

  const starsElement = (stars) => {
    const output = [];
    const initialValue = 0;

    for (let index = initialValue; index < stars; index += 1) {
      output.push(<span>★</span>);
    }

    return output;
  };

  return (
    <DefaultWrapper
      wrapperInfo={ detailPage }
      render={ <ShoppingDetails item={ item } modifyCart={ modifyCart } /> }
    >
      <CartIcon cartItems={ cartItems } />
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
      </div>
      <div>
        <h1>Especificações técnicas</h1>
        <p>Especificações</p>
      </div>
      <div>
        <form onSubmit={ onSubmit }>
          <p>Comentário</p>
          <textarea
            data-testid="product-detail-evaluation"
            name="textRating"
            id="text"
            cols="30"
            rows="5"
          />
          <div className="rating">
            <label htmlFor="star-1">
              <input type="radio" id="star-1" name="stars" value="1" />
              <span className="icon">★</span>
            </label>
            <label htmlFor="star-2">
              <input type="radio" id="star-2" name="stars" value="2" />
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label htmlFor="star-3">
              <input type="radio" id="star-3" name="stars" value="3" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label htmlFor="star-4">
              <input type="radio" id="star-4" name="stars" value="4" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label htmlFor="star-5">
              <input type="radio" id="star-5" name="stars" value="5" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
          </div>
          <input type="submit" />
        </form>
      </div>
      {
        ratings.map((rating) => (
          <div className="evaluation" key={ rating }>
            <p>{rating.textRating}</p>
            {starsElement(rating.stars)}
          </div>
        ))
      }
    </DefaultWrapper>
  );
}

DetailPage.propTypes = {
  cartItems: PropTypes.number.isRequired,
  modifyCart: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailPage;
