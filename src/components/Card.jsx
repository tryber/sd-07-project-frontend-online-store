import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.addCartItem = this.addCartItem.bind(this)
    }

    addCartItem({ id, title, price }) {
        const cartItemProperties = { id, title, price };
        if (!localStorage.cartItems) {
            localStorage.setItem('cartItems', JSON.stringify([cartItemProperties]));
        } else {
            const itemsInStorage = localStorage.getItem('cartItems');
            const parsedItems = JSON.parse(itemsInStorage);
            localStorage.setItem('cartItems', JSON.stringify(parsedItems.concat(cartItemProperties)));
        }
    }
    render() {
        const { products } = this.props;
        const { title, thumbnail, price, id, category_id } = products;

        return (
            <div data-testid="product" className="cardProduct">
                <Link to={`/details/${id}/category/${category_id}`} data-testid="product-detail-link" >
                    <h1>{title}</h1>
                    <img src={thumbnail} alt="product item" />
                    <h2>R${price}</h2>
                </Link>
                <button
                    type="button"
                    name="productId"
                    data-testid="product-add-to-cart"
                    onClick={() => this.addCartItem({ id, title, price })}
                >
                    Adicionar ao carrinho
                </button>
            </div>
        )
    }
}

export default Card;
