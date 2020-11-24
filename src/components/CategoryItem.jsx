import React from 'react';

export default class CategoryList extends React.Component {
  render() {
    return (
      <div>
        <li data-testid="category" key={this.props.id}>{this.props.category}</li>
      </div>
    )
  }
}