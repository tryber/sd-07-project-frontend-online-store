import React, { Component } from 'react';
import * as API from './services/api';
import { Link } from 'react-router-dom';
class FilterList extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      loading: false,
      selected: '',   
    };
  }
  componentDidMount() {
    this.fetchCategories();
  }
  fetchCategories() {
    this.setState({ loading: true }, async () => {
      const data = await API.getCategories();
      this.setState({ categoriesList: data, loading: false });
    });
  }

  render() {
    const { categoriesList, loading } = this.state;
    console.log(this.state.selected)
    let option;
    if (loading) {
      option = <p>Carregando...</p>;
    } else {
      option = (<ul> Filtre por categoria: <br /><br/>
        {categoriesList.map((item) => (
            <li key={item.id}>
              <Link to='' onClick={() => this.props.changeSelected(item.id)} >
                {item.name}
                {/* to='' onClick={() => this.setState({selected: item.id,})} */}
              </Link>
            </li>
        ))}
      </ul>);
    }
    return (
      <div className='getCategories'>
        {option}
      </div>
    );
  }
}
export default FilterList;
