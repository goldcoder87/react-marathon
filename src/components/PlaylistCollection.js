import React, { Component } from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlists = this.props.playlists.map((playlist) => {
        const{id, name, songs } = playlist

        let handlePlaylistSelect = () => this.props.handlePlaylistSelect(id);
        
        return(
          <Playlist
          key={id}
          name={name}
          songs={songs}
          />
        )
      })

    return (
      <ul>
        {Playlist}
      </ul>
    )
  }
}

export default PlaylistCollection
