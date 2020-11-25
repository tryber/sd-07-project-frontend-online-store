import React from 'react';
import * as api from '../services/api';

class Categorylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
  }

  async componentDidMount() {
    const response = await api.getCategories();
    this.setState({ category: response });
  }

  render() {
    const { category } = this.state;
    return (
      <select>
        {category.map(({ id, name }) => (
          <option data-testid="category" key={id}>
            {name}
          </option>
        ))}
      </select>
    );
  }
}

export default Categorylist;
