import React from 'react';
import Produto from './Produto';

class ListaDeProdutos extends React.Component {

    render() {
        const arrResultFetch = this.props.onFetchProducts;
        return(
            <div>
              {arrResultFetch.map((product) => <Produto key={product.id} product={product} />)}
            </div>
        )
    }
}

export default ListaDeProdutos;
