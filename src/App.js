import React, { Component } from 'react';
import Coin from './components/coin';

class App extends Component {
  state={
    coins: [],
    addingCoins: [],
  }
  render(){
    return(
      <div className="App">
        <button>
          new numbers
        </button>
        <ul>
          <Coin></Coin>
        </ul>
      </div>
    )
  }
}

export default App;
