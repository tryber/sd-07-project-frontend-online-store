import React from 'react';
import * as mlAPI from '../services/api';
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfCategories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState(
      async () => {
        const categoriesFromApi = await mlAPI.getCategories();
        this.setState({
          loading: false,
          arrayOfCategories: categoriesFromApi,
        });
      },
    );
  }

  render() {
    const { arrayOfCategories } = this.state;
    const { handleChange } = this.props;
    return (
      <>
        { arrayOfCategories.map(
          ({ id, name }) => (
            <label>
              <input
                data-testid="category"
                type="radio"
                id={name}
                name="categoryId"
                value={id}
                onChange={handleChange}
              />
              {name}
            <br />
            </label>
          ),
        )}
      </>
    );
  }
}

export default Categories;
