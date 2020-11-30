import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import SideBar from '../components/home/SideBar';
import SumCart from '../components/home/SumCart';
import CategoryList from '../components/home/CategoryList';
import SearchControl from '../components/home/SearchControl';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      result: '',
      categoryId: '',
      query: '',
      search: false,
      buy: 0,
    };
    this.upCategoryId = this.upCategoryId.bind(this);
    this.upQuery = this.upQuery.bind(this);
  }

  componentDidMount() {
    getCategories().then((allCategories) => {
      this.setState({ categories: allCategories });
    });
  }

  clickSearch() {
    const { categoryId, query } = this.state;
    getProductsFromCategoryAndQuery(categoryId, query).then(
      (result) => {
        this.setState({
          result,
          search: true,
        });
      },
    );
  }

  upCategoryId(search) {
    this.setState({ categoryId: search }, () => {
      this.clickSearch();
    });
  }

  upQuery(search) {
    this.setState({ query: search }, () => {
      this.clickSearch();
    });
  }

  render() {
    const { categories, result, query, search, buy } = this.state;
    return (
      <div>
        <div className="sidebar">
          <SideBar onClick={ this.upQuery } />
          <SumCart num={ buy } />
        </div>
        <div className="product">
          <div className="product-list-category">
            <CategoryList
              check={ this.upCategoryId }
              categories={ categories }
            />
            <div className="productsList">
              <SearchControl
                num={ buy }
                data-testid="product-detail-add-to-cart"
                search={ search }
                answer={ result }
                query={ query }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
