import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import '../App.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: ''
    }
  }


  
  render() {
    return (
      <main>
        <header>
          <div>
            <h3>Aqui vai uma logo</h3></div>
          <div>
            <SearchBar />
          </div>
          <div></div>
        </header>
      </main>
    );
  }
}
