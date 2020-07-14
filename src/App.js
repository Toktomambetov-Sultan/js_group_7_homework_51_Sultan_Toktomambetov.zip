import React, { Component } from 'react';
import random from "./functions/random"
import Coin from './components/coin';
import "./App.css"

class App extends Component {
  state = {
    coins: [],
    addingCoins: (function () {
      const list = [];
      for (let coin = 5; coin <= 36; coin++) {
        list.push(coin);
      }
      return list;
    })(),
  }
  getNewCoin = () => {
    const coins = [...this.state.coins];
    const addingCoins = [...this.state.addingCoins];
    if (addingCoins.length != 0) {
      const index = random(addingCoins.length);
      coins.push(addingCoins[index]);
      addingCoins.splice(index, 1);
      coins.sort(function (a, b) {
        return a - b;
      });
      this.setState({ addingCoins, coins });
      console.log(coins);
    }
  }
  render() {
    return (
      <div className="container App">
        <button onClick={this.getNewCoin} className="btn">
          new numbers
        </button>
        <ul className="list">
          {this.state.coins.map(coin => (<Coin key={coin.toString()}>{String(coin)}</Coin>))}
        </ul>
      </div>
    )
  }
}

export default App;
