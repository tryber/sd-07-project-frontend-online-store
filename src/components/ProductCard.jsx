import React from 'react';
import '../App.css';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.item
    return (
      <section data-testid="product">
        <img alt="Sell Product" className="card-image" src={thumbnail} />
        <div className="info">
          <h4>{title}</h4>
          <h5>{price}</h5>
        </div>
        <hr />
      </section>
    );
  }
}

// ProductCard.propTypes = {
//   movie: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     storyline: PropTypes.string,
//     imagePath: PropTypes.string,
//   }).isRequired,
// };

export default ProductCard;