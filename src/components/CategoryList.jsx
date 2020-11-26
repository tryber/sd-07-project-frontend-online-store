import React, { Component } from "react";
import * as api from '../services/api';
import "./CategoryList.css"


export default class CategoryList extends Component{
constructor(){
    super();
    this.listOfCategory = this.listOfCategory.bind(this);
    this.state = {
      category: [],
    }
  }

  componentDidMount() {
    this.listOfCategory();
  }

  
  async listOfCategory() {
    const Fetch = await api.getCategories();
    this.setState({
      category: Fetch,
    })
    
  }
 async filterCategory(event) {
   const {handleChange, handleClick} = this.props
  await handleChange(event);
   handleClick(event);
 }
//  const results = this.props.results
  render() {
    return(
        <div className="container-lists-category">
          {this.state.category.map(categoria => <li onClick={this.filterCategory} name='category' data-testid="category" key={categoria.id}>{categoria.name}</li>)}
        </div>
    )
    
  }
}
