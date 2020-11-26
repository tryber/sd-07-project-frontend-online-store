import React from 'react';

export default class CategoryList extends React.Component {
  render() {
    return (
      <div className="category">
        <li data-testid="category"
        className="category-iten"
            key={this.props.id}
        >
           {this.props.category}
        </li>
      </div>
    )
  }
}
