import React from 'react';
import PropTypes from 'prop-types';

import { CategoryContainer, ButtonCategory } from './styles';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      toggle: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((previuState) => ({
      toggle: !previuState,
    }));
  }

  render() {
    const { toggle } = this.state;
    const { name, id, selectCategory } = this.props;
    return (
      <CategoryContainer onClick={ this.handleToggle }>
        <ButtonCategory
          toggle={ toggle }
          type="button"
          id={ id }
          data-testid="category"
          onClick={ selectCategory }
        >
          {name}
        </ButtonCategory>
      </CategoryContainer>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default Category;
