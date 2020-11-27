import React from 'react';

class Produto extends React.Component {
    render() {
        const { title, price, thumbnail, id } = this.props.product;
        return (
            <div data-testid='product'>
                <h1>{title}</h1>
                <img src={thumbnail} alt=""/>
                <span>{price}</span>
            </div>
        )
    }
}

export default Produto;
