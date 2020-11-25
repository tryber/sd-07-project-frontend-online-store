import React from 'react';

class CategoryList extends React.Component {
    constructor() {
        super();
        this.state = {
          categories: [],
        };
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
