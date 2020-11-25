import React from 'react';

class CategoryList extends React.Component {
    constructor() {
        super();
        this.state = {
          categories: [],
        };
        this.apiRequisition = this.apiRequisition.bind(this);
      }

      componentDidMount() {
          this.apiRequisition();
      }

      apiRequisition() {
        api.getCategories().then((listOfCategories) => {
          this.setState({
            categories: listOfCategories,
          });
        });
      }
    
    render() {
        return();
    }
}

export default CategoryList;
