import React from 'react';
import * as Api from '../services/api';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
    };
  }

  async componentDidMount() {
    const Categorys = await Api.getCategories();
    this.setState({ category: Categorys });
  }

  render() {
    const { category } = this.state;
    if (!category[0]) return <div />;

    return (
      <div>
        {category.map(({ name, id }) => (
          <div key={id}>
            <input type="radio" name={name} id={id} data-testid="category" />
            <label htmlFor={id}>{name}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;
