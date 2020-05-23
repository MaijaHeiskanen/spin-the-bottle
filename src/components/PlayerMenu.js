import React from "react";
import "./../App.scss";

class PlayerMenu extends React.Component {
  _renderAddPlayer() {}

  _renderPlayers() {
    if (!this.props.players) {
      return null;
    }

    let players = [];

    for (let i = 0; i < this.props.players.length; i++) {
      players.push(<tr>{this.props.players[i]}</tr>);
    }

    return <table className="players-container">{players}</table>;
  }

  render() {
    const players = this._renderPlayers();
    return (
      <>
        <div className="title">Who are playing?</div>
        {players || <div>There is no players yet. Add some!</div>}
        <div className="add-player-container">
          <p>Add a player:</p>
          <input placeholder="Player's name"></input>
          <button>Add</button>
        </div>
      </>
    );
  }
}

export default PlayerMenu;
