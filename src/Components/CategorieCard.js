import React from 'react';

import PropTypes from 'prop-types';

class CategorieCard extends React.Component {
  constructor(props) {
    super(props);   
       
  }
  

  render() {
    const { category, onclick } = this.props;
    return (
      <div data-testid="category">
        <button onClick={onclick}>
        { category.name }
        </button>
        
      </div>
    );
  }
}

export default CategorieCard;

CategorieCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }),
};

CategorieCard.propTypes = {
  name: PropTypes.string,
};
