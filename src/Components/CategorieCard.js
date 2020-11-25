import React from 'react';
import PropTypes from 'prop-types';

class CategorieCard extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div data-testid="category">
        <p>
          { category.name }
        </p>
      </div>
    );
  }
}

export default CategorieCard;

CategorieCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

CategorieCard.propTypes = {
  name: PropTypes.string.isRequired,
};
