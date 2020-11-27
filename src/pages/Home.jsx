import React from 'react';
import CampoDeBusca from '../components/CampoDeBusca.jsx'
import BotaoCarrinho from '../components/BotaoCarrinho.jsx';
import ListaDeCategorias from '../components/ListaDeCategorias.jsx';
import * as api from '../services/api';
import ListaDeProdutos from '../components/ListaDeProdutos.jsx'

class Home extends React.Component {

    constructor() {
        super();

        this.handleInputChange = this.handleInputChange.bind(this)

        this.state = {
          query: '',
          categoryId: '',
          categories: [],
          onFetchProducts: [],
        }
    }

    componentDidMount() {
      api.getCategories().then(categories => {
        this.setState({
          categories,
        })
      });
    }

    handleInputChange(search) {
        this.setState(() => ({
            query: search,
        }), () => {
        const { categoryId, query } = this.state;
        api.getProductsFromCategoryAndQuery(categoryId, query)
        .then(response => this.setState({
          onFetchProducts: response.results,
      }))
        })
    }

    render() {
        const { query, categories, onFetchProducts } = this.state;

        return (
          <div>
              <CampoDeBusca query={query}  handleInputChange={this.handleInputChange} />
              {onFetchProducts.length !== 0 ? 
              <ListaDeProdutos onFetchProducts={onFetchProducts} /> :
              <p data-testid ="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>} 
              <ListaDeCategorias categories={categories}/>
              <BotaoCarrinho />
          </div>
        )

     
    }
}

export default Home;
