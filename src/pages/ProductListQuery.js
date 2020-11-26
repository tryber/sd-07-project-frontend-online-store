import React, { Component } from 'react';
import { getProductsFromQuery } from  '../services/api';
import ProductCard from '../components/ProductCard';

class ProductListQuery extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
        }

        this.fecthProducts = this.fecthProducts.bind(this);
    }
    
    async fecthProducts(query) {
        const result = await getProductsFromQuery(query);
        this.setState({
            products: result,
        });
    } 

    render() {
        return (
            <div>
                <ProductCard products={products}/>
            </div>
        )
    }
}

