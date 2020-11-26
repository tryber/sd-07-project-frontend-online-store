import React from 'react';

class ProductDetail extends React.Component {

    constructor(props) {
        super(props)
        this.ecrever = this.ecrever.bind(this);
    }
    
    componentDidMount() {
        this.ecrever()
    }

    ecrever() {
        console.log(this.props);
    }

    render() {

        return (
            <div data-testid="product" className="cardProduct">
                <p>{this.props}</p>
            </div>
        )
    }
}

export default ProductDetail;
