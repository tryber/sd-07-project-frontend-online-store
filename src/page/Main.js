import React from 'react';
import * as api from '../services/api'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }
    this.requestApiCategories = this.requestApiCategories.bind(this);
  }

  componentDidMount() {
    this.requestApiCategories();
  }

  async requestApiCategories() {
      this.setState({
        categories: await api.getCategories(),
      })         
  }

  render() {
    const { categories } = this.state;
    console.log(categories)
    return (
      <div>
        {categories.map((category) => {
         return <div>
            <input type="radio" id="male" name="gender" value={category.name} />{category.name}
            <br/> 
            <br/>  
          </div>
                  
        })}
      </div>
    );
  }
}

export default Main;
