import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      myCategories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ myCategories: categories }));
  }

  makeList(list) {
    return <li data-testid="category" key={ list.id }>{list.name}</li>;
  }

  render() {
    const { myCategories } = this.state;
    return (
      <div>
        {myCategories.map((categorie) => this.makeList(categorie))}
      </div>
    );
  }
}

export default Categories;
