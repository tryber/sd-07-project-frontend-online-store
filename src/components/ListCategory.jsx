import React from 'react';
import * as api from '../services/api';
import Loading from './Loading';
import Item from './ItemCategory';

class ListCategory extends React.Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      loading: true,
      categories: [],
    };
  }

  fetchCategories() {
    this.setState(
      {
        loading: true,
      },
      async () => {
        const response = await api.getCategories();
        // console.log(response)
        this.setState((prevStates) => ({
          loading: false,
          categories: [...prevStates.categories, ...response],
        }));
      },
    );
  }

  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    const { loading, categories } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        {categories.map(({ id, name }) => <Item key={id} name={name} id={id} />)}
      </div>
    );
  }
}

export default ListCategory;
