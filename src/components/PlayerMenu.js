import React from "react";
import "./../App.scss";

class PlayerMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      newPlayer: "",
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  addPlayer() {
    if (this.state.newPlayer.length > 0) {
      this.props.addPlayer(this.state.newPlayer);
      this.setState({ newPlayer: "" });
    }
  }

  handleChange(event) {
    this.setState({ newPlayer: event.target.value });
  }

  _renderAddPlayer() {
    return (
      <div className="add-player-container">
        <input
          className="add-player-input"
          type="text"
          value={this.state.newPlayer}
          onChange={this.handleChange}
          placeholder="Player's name"
        ></input>
        <button className="add-player-button" onClick={this.addPlayer}>
          Add
        </button>
      </div>
    );
  }

  removePlayer(player) {
    this.props.removePlayer(player);
  }

  _renderPlayer(player) {
    return (
      <div className="player" key={player}>
        <div className="player-name">{player}</div>
        <button
          onClick={() => {
            this.removePlayer(player);
          }}
          className="delete-button"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  }

  _renderPlayers() {
    if (!this.props.players) {
      return null;
    }

    let players = [];

    for (let i = 0; i < this.props.players.length; i++) {
      const player = this._renderPlayer(this.props.players[i]);
      players.push(player);
    }

    return <div className="players-container">{players}</div>;
  }

  render() {
    const players = this._renderPlayers();
    const addPlayer = this._renderAddPlayer();
    return (
      <>
        <div className="title">Who are playing?</div>
        {players || <div>There is no players yet. Add some!</div>}
        {addPlayer}
      </>
    );
  }
}

export default PlayerMenu;
