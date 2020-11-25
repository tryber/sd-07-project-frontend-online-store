import React from 'react';
import Card from './Card';

class List extends React.Component {
  render() {
    const { lista } = this.props;
    if (Object.keys(lista).length >= 2) {
      return (lista.results.map((resultado, index) => <Card key={index} produto={resultado}/>));
    }
    return (<h3 data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </h3>);
  };
}
//Comentário aleatório para comitar
export default List;