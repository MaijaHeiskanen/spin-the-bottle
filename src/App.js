import React from "react";
import "./App.scss";

import Bottle from "./components/Bottle";
import PalyerMenu from "./components/PlayerMenu";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSpinning: false,
      players: [],
      target: null,
    };
    this.spinTheBottle = this.spinTheBottle.bind(this);
    this.setSpin = this.setSpin.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  addPlayer(newPlayer) {
    let players = this.state.players;
    let sure = true;

    if (
      newPlayer.toLowerCase() === "nico" ||
      newPlayer.toLowerCase() === "niso"
    ) {
      // eslint-disable-next-line no-restricted-globals
      sure = confirm("Oletko varma?? Aika massive uhka Xd");
    }

    if (sure) {
      if (!players.includes(newPlayer)) {
        players.push(newPlayer);
        this.setState({ players: players });
      } else {
        alert("TäMä pELaAjA oLi Jo LiSTaSsA!!1!!!1");
      }
    }
  }

  _getRandomPlayer() {
    const players = this.state.players;
    const amount = players.length;
    const randomInt = Math.floor(Math.random() * (0 - amount)) + amount;
    const player = players[randomInt];
    return player;
  }

  removePlayer(removedPlayer) {
    let players = this.state.players;
    if (players.includes(removedPlayer)) {
      for (let i = 0; i < players.length; i++) {
        if (players[i] === removedPlayer) {
          players.splice(i, 1);
        }
      }
      this.setState({ players: players });
    } else {
      // TODO: Error??
    }
  }

  spinTheBottle() {
    setTimeout(() => {
      const randomPlayer = this._getRandomPlayer();
      this.setState({ isSpinning: false, target: randomPlayer });
    }, 1050);
  }

  setSpin() {
    this.setState({ isSpinning: true });
  }

  render() {
    let chosenOne = null;
    if (this.state.target) {
      chosenOne = (
        <div className="header">
          {this.state.target} was targeted by the bottle!
        </div>
      );
    } else {
      chosenOne = <div className="header">Spin the Bottle!</div>;
    }

    return (
      <div className="App">
        <div className="menu-container">
          <PalyerMenu
            players={this.state.players}
            addPlayer={this.addPlayer}
            removePlayer={this.removePlayer}
          />
        </div>
        <div className="bottle-container">
          {this.state.isSpinning ? (
            <div className="header">Bottle is spinning...</div>
          ) : (
            chosenOne
          )}
          <Bottle
            spin={this.spinTheBottle}
            setSpin={this.setSpin}
            isSpinning={this.state.isSpinning}
          />
        </div>
      </div>
    );
  }
}

export default App;
