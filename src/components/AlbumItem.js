import React, { Component } from "react";

class AlbumItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.album.artworkUrl100} />
      </div>
    );
  }
}

export default AlbumItem;
