import React, { useState } from 'react';

import CartIcon from '../../components/CartIcon'
import DefaultWrapper from '../../components/DefaultWrapper';
import ShoppingDetails from '../../components/ShoppingDetails';
import { useForm } from 'react-hook-form';
import './style.css';

const detailPage = {
  title: "Detalhes do produto",
  showHeaderButton: true,
  closeButtonLink: "/",
};

function DetailPage(props) {
  const { state: item } = props.location;
  const { title, thumbnail } = item;
  const { register, handleSubmit } = useForm();
  const [ratings, setRatings] = useState([]);

  const onSubmit = (data) => {
    setRatings([...ratings, data]);
  };

  const starsElement = (stars) => {
    const output = [];
    for (let index = 0; index < stars; index++) {
      output.push(<span>★</span>);
    }
    return output;
  };

  return (
    <DefaultWrapper
      wrapperInfo={detailPage}
      render={<ShoppingDetails item={item} modifyCart={props.modifyCart} />}
    >
      <CartIcon cartItems={props.cartItems} />
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={thumbnail} alt={title} />
      </div>
      <div>
        <h1>Especificações técnicas</h1>
        <p>Especificações</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Comentário</label>
          <textarea
            data-testid="product-detail-evaluation"
            name="textRating"
            id="text"
            cols="30"
            rows="5"
            ref={register}
          />
          <div className="rating">
            <label>
              <input type="radio" name="stars" value="1" ref={register} />
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" ref={register} />
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" ref={register} />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="4" ref={register} />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" ref={register} />
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
      {ratings.map((rating) => {
        return (
          <div className="evaluation">
            <p>{rating.textRating}</p>
            {starsElement(rating.stars)}
          </div>
        );
      })}
    </DefaultWrapper>
  );
}

export default DetailPage;
