import React from 'react';


class DetalhesDoProduto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
     const { product } = this.props.location.state
    
        return (
        <div>
             <h1 data-testid="product-detail-name" className="detalhe-produto">{ product.title }</h1>
             <img src={ product.thumbnail } alt="produto" />
             <p>R$ { product.price }</p>
        </div>
        )
    }  
}

export default DetalhesDoProduto;
