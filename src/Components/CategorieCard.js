import React from 'react';
import '../Pages/Home.css';

import PropTypes from 'prop-types';

class CategorieCard extends React.Component {
  render() {
    const { category, onclick } = this.props;
    return (
      <div>
        <button className="category" data-testid="category" onClick={ onclick }>
          { category.name }
        </button>
      </div>
    );
  }
}

export default CategorieCard;

CategorieCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

CategorieCard.propTypes = {
  name: PropTypes.string,
};
