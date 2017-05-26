import React, { Component } from 'react';

class Song extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <li className={this.props.selected} onClick={this.props.handleSongSelect}>
        {this.props.name} - {this.props.artist}
      </li>
    )
  }
}

export default Song
