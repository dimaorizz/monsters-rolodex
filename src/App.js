import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters : users }));
  }

  searchHandler = e => {
    this.setState( { searchField: e.target.value });
  };
  
  render() {
      const { monsters, searchField } = this.state; // extracting properties
      const searchedMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return(
        <div className="App">
          <SearchBox placeholder='Monster name' searchHandler={ this.searchHandler } />
          <CardList monsters = { searchedMonsters } />
        </div>
      )
    }
  }

export default App;
