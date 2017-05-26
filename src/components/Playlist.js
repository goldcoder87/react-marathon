import React, { Component } from 'react';


class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className={this.props.name} onClick={this.props.handlePlaylistSelect}>
      {this.props.name}
      </li>
    )
  }
}

export default Playlist
