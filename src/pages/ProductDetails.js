import React, { Component } from 'react';

import Details from '../components/Details';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      feedback: '',
      evaluation: 0,
    }

    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage({ target: { name, value } }) {
    this.setState({ [name]: value }) 
  }

  render() {
    return(
      <Details onChange={this.handleMessage}/>
    )
  }
}