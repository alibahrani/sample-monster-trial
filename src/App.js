import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchField:''

    };
  }

  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).then(somethings => this.setState({products:somethings}));
    
  }
  
  render() {
    return (
      
      <div className="App">
      <input type='search' onChange={e => this.setState({searchField: e.target.value} )} placeholder='Search products' />
      <CardList products={this.state.products} />
        
      </div>
    );
  }
  
}

export default App;
