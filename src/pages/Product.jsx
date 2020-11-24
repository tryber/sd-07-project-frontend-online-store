import React, { Component } from 'react';
import * as API from '../services/api';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        
    }

    async requestProducts() {
        const ProductList = await API.getCategories();
        this.setState({ categories: categoriesList })
    }
    render() {
        return ()
    }
}

export default Product;