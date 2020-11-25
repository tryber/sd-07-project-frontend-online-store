/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    );
  };
}

export default SearchBar;