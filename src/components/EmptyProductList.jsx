import React from 'react';

export default class EmptyProductList extends React.Component {
  render() {
    return (
      <div
        data-testid="home-initial-message"
        className="empty-product-list"
      >
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}
