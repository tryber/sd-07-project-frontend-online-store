import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CategorieCard extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div data-testid="category">
        <Link to={ `/CategoryListCards/${category.id}` }>
          { category.name }
        </Link>
      </div>
    );
  }
}


CategorieCard.propTypes = {
  category: PropTypes.shape ({
    name: PropTypes.string,
    id:
  }),
};

export default CategorieCard;

};
