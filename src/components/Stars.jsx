import React from 'react';
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
    this.estrelaCadente(1);
  }

  brilhaEstrlinha(not) {
    let ceu = []
    for (let estrela = 0; estrela < 5; estrela += 1) {
      let notinha = estrela + 1;
      if (estrela < not) {
        ceu.push({ img: StarFull, index: notinha });
      } else {
        ceu.push({ img: StarEmpty, index: notinha });
      }
    }
    this.setState({ constelação: ceu });
  }

  estrelaCadente(not) {
    this.props.astronomo(not);
    this.brilhaEstrlinha(not);
  }

  render() {
    const { constelação } = this.state;
    return (
      <div>
        {constelação.map((estrela) => <img 
          key={estrela.index}
          src={estrela.img}
          alt={`nota ${estrela.index}`}
        onClick={() => this.estrelaCadente(estrela.index)}/>)}
      </div>
    );
  }
}

export default Stars;
