import React from 'react';

class List extends React.Component {
  render() {
    const { category, query } = this.props;
    if (category === "") {
      return(<h1>pequisar por query</h1>)
    } else {
      if (query === "") {
        return(<h1>pesquisar por categoria</h1>)
      } else {
        return (<h1>pesquisar por categoria e query</h1>)
      }
    }
  };
}

export default List;