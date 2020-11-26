import React from "react";

class PageCard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      products: [],
    };
  }
  componentDidMount(){
    this.retrieveItemsSavedBeforeFromLocalStorage()
  }  
  retrieveItemsSavedBeforeFromLocalStorage = () => {
    const getItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
    console.log(getItemsFromLocalStorage);
  }

  render() {
    const { loading, products } = this.state;
    if (loading)
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    return (
      <div className="">
        
      </div>
      )
  }
}

export default PageCard;
