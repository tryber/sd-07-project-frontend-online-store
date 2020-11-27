import React from 'react';
import PropTypes from 'prop-types';

class Categoria extends React.Component {
  render() {
    const { id, name } = this.props;
    return (
      <li
        key={ id }
        data-testid="category"
      >
        { name }
      </li>
    );
  }
}

export default Categoria;

Categoria.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
