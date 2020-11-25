import React from 'react'
import ShoppingCartButton from '../components/ShoppingCartButton'

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Home</h1>
          <ShoppingCartButton />
        </header>
      </div>
    )
  }
}

export default Home;
