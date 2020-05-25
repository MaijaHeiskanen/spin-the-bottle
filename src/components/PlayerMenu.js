import React from "react";
import "./../App.scss";

class PlayerMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      newPlayer: "",
    };

    this._addPlayer = this._addPlayer.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._removePlayer = this._removePlayer.bind(this);
  }

  _addPlayer(event) {
    if (
      (event.type === "keypress" && event.key === "Enter") ||
      event.type === "click"
    ) {
      console.log(event);
      if (this.state.newPlayer.length > 0) {
        this.props.addPlayer(this.state.newPlayer);
        this.setState({ newPlayer: "" });
      }
    }
  }

  _handleChange(event) {
    this.setState({ newPlayer: event.target.value });
  }

  _removePlayer(player) {
    this.props.removePlayer(player);
  }

  _renderAddPlayer() {
    return (
      <div className="add-player-container">
        <input
          className="add-player-input"
          type="text"
          value={this.state.newPlayer}
          onChange={this._handleChange}
          placeholder="Player's name"
          onKeyPress={this._addPlayer}
        ></input>
        <button className="add-player-button" onClick={this._addPlayer}>
          Add
        </button>
      </div>
    );
  }

  _renderPlayer(player) {
    return (
      <div className="player" key={player}>
        <div className="player-name">{player}</div>
        <button
          onClick={() => {
            this._removePlayer(player);
          }}
          className="delete-button"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  }

  _renderPlayers() {
    if (this.props.players.length === 0) {
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
        <div>
          <div className="divider"></div>
          {addPlayer}
        </div>
      </>
    );
  }
}

export default PlayerMenu;
