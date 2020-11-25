import React from  'react';
import SearchBar from './SearchBar';
import CardProduct from './Card';

class ListCards extends React.Component {
    render() {
        const { produts } = this.props;
    
        return (
          <div data-testid="movie-list" className="movie-list">
            {produts.map((produt) => <CardProduct key={produt.title} image={produt.image} price={produt.price} />)}
          </div>
        );
      }
}

ListCards.propTypes = { produts: PropTypes.ArrayOf(PropTypes.object).isRequired}

export default ListCards;
