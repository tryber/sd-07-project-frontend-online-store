import React from 'react';
import '../Pages/Home.css';
import PropTypes from 'prop-types';

class CategorieCard extends React.Component {
  render() {
    const { category, onclick } = this.props;
    return (
      <div>
        <button className="category" type="button" data-testid="category" onClick={ onclick }>
          { category.name }
        </button>
      </div>
    );
  }
}


CategorieCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};


export default CategorieCard;
