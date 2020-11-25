import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Categories extends React.Component {
    constructor(){
        super();
        this.state = {
            categories: [],
        }
    }
    componentDidMount() {
        
        api.getCategories()
    }
    render() {

      return (
        <div>
            {
               
            }
        </div>
      );
    }
  }

  export default Categories;