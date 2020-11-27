import React from 'react';
import { FormControlLabel, FormControl, RadioGroup, Radio, FormLabel } from '@material-ui/core';

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange({ target }) {
  //   const { value, checked } = target;
  //   this.setState({ rating: value });
  //   if (checked) this.setState({ selected: checked });
  //   console.log(value);
  //   console.log(checked);
  // }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  render() {
    const { rating, email, message } = this.state;
    return (
      <div>
        {/* <FormControl>
          <FormLabel component="legend">Avalição</FormLabel>
          <RadioGroup row aria-label="stars" name="star" value={ rating } onChange={ this.handleChange }>
            <FormControlLabel value={ 1 } control={ <Radio /> } label="1" />
            <FormControlLabel value={ 2 } control={ <Radio /> } label="2" />
            <FormControlLabel value={ 3 } control={ <Radio /> } label="3" />
            <FormControlLabel value={ 4 } control={ <Radio /> } label="4" />
            <FormControlLabel value={ 5 } control={ <Radio /> } label="5" />
          </RadioGroup>
        </FormControl> */}
        <form>
          Anavliações
          <label htmlFor="email">
            Email:
            <input
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            Avaliação (1 a 5):
            <input
              name="rating"
              type="number"
              value={ rating }
              onChange={ this.handleChange }
              min="1"
              max="5"
            />
          </label>
          <label htmlFor="email">
            Mensagem: (Opcional)
            <textarea
              name="message"
              data-testid="product-detail-evaluation"
              value={ message }
              onChange={ this.handleChange }
            />
          </label>
          <button type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default RatingForm;
