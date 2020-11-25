import React from 'react';

class List extends React.Component {
  render() {
    const { category, query } = this.props;
    if(category === "") {
      if(query === "") {
        return(
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        );
      }else {
        return(<h3>pesquisa por titulo</h3>);
      }
    } else {
      if(query === "") {
        return(<h3>pesquisa por categoria</h3>);
      }else {
        return(<h3>pesquisa por categoria e titulo</h3>);
      }
    }
  };
}

export default List;