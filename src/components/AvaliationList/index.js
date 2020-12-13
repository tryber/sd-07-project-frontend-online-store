import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class AvaliationList extends React.Component {
  render() {
    const { avaliations } = this.props;
    return (
      <>
        <h1>Histórico de comentários:</h1>
        { avaliations.map((avaliation) => (
          <div key={ avaliation.text }>
            <p>
              Nome:
              {' '}
              { avaliation.name }
            </p>
            <p>
              Avaliação:
              {' '}
              { avaliation.rating }
            </p>
            <p>
              Comentários:
              {' '}
              { avaliation.text }
            </p>
            {' '}
          </div>
        ))}
      </>
    );
  }
}

AvaliationList.propTypes = {
  avaliations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};
