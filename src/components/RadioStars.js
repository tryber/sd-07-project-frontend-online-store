import React from 'react';

class RadioStars extends React.Component {
  render() {
    const values = ['1', '2', '3', '4', '5'];
    return (
      <fieldset className="rating">
        <legend>Avalie:</legend>
        {values.map((value) => {
          const star = `star${value}`;
          return (
            <label key={ star } htmlFor={ star } title={ value }>
              <input type="radio" id={ star } name="rating" value={ value } required />
              {value}
              {' '}
              stars
            </label>
          );
        })}
      </fieldset>
    );
  }
}

export default RadioStars;
