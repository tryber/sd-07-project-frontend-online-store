import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GetIcon extends Component {
  constructor() {
    super();

    this.state = {
      iconsIndex: {
        ReturnArrowIcon: [
          `M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 
          2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 
          0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 
          1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z`,
        ],
        ShoppingCartIcon: [
          `M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 
          .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 
          1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 
          0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 
          1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 
          12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 
          0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 
          0 2 1 1 0 0 0 0-2z`,
        ],
        AddShoppingCartIcon: [
          `M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 
          3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 
          0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 
          1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 
          12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 
          0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 
          2 1 1 0 0 0 0-2z`,

          `M8.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 
          1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z`,
        ],
        CloseIcon: [
          `M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 
          1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 
          8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 
          5.354a.5.5 0 0 1 0-.708z`,
        ],
        DashIcon: [
          'M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z',
        ],
        PlusIcon: [
          `M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 
          0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z`,
        ],
        SearchIcon: [
          `M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 
          1.415l-3.85-3.85a1 1 0 0 1 0-1.415z`,

          `M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 
          6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z`,
        ],
      },
    };
  }

  render() {
    const { props, state } = this;
    const { name, className } = props;
    const paths = state.iconsIndex[name];

    return (
      <svg width="1.8em" viewBox="0 0 16 16" className={ className } xmlns="http://www.w3.org/2000/svg">
        { paths.map((path) => <path key={ name } fillRule="evenodd" d={ path } />) }
      </svg>
    );
  }
}

GetIcon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
}.isRequired;

export default GetIcon;

