import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Bigfoot',
          id: 'mstr1'
        },
        {
          name: 'Banshee',
          id: 'mstr2'
        },
        {
          name: 'Ghost',
          id: 'mstr3'
        }
      ]
    };
  }

    render() {
      return(
        <div className="App">
          {
            this.state.monsters.map(monster => 
                <h1 key={ monster.id }> { monster.name } </h1>  
              )
          }  
        </div>
      )
    }
  }

export default App;
