import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.requestApiCategories = this.requestApiCategories.bind(this);
  }
  componentDidMount() {
    this.requestApiCategories();
  }
  async requestApiCategories() {
    this.setState({
      categories: await api.getCategories(),
    });
  }
  render() {
    return <div>{}</div>;
  }
}

export default Categories;
