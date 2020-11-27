import React from 'react';
import PropTypes from 'prop-types';
import StarFull from './img/star.png';
import StarEmpty from './img/star-enpty.png';

class Stars extends React.Component {
  constructor() {
    super();
    this.brilhaEstrlinha = this.brilhaEstrlinha.bind(this);
    this.estrelaCadente = this.estrelaCadente.bind(this);
    this.state = {
      constelação: [],
    };
  }

  componentDidMount() {
    this.estrelaCadente('1');
  }

  brilhaEstrlinha(not) {
    const ceu = [];
    const estrelas = ['1', '2', '3', '4', '5'];
    estrelas.forEach((n) => {
      if (n <= not) {
        ceu.push({ img: StarFull, index: n });
      } else {
        ceu.push({ img: StarEmpty, index: n });
      }
    });
    this.setState({ constelação: ceu });
  }

  estrelaCadente(not) {
    const { astronomo } = this.props;
    astronomo(not);
    this.brilhaEstrlinha(not);
  }

  render() {
    const { constelação } = this.state;
    return (
      <div>
        {constelação.map((estrela) => (
          <input
            type="button"
            key={ estrela.index }
            src={ estrela.img }
            alt={ `nota ${estrela.index}` }
            onClick={ () => this.estrelaCadente(estrela.index) }
          />
        ))}
      </div>
    );
  }
}

Stars.propTypes = {
  astronomo: PropTypes.func.isRequired,
};

export default Stars;
