import React, { Component } from "react";

class AlbumItem extends Component {
  render() {
    return (
      <>
        <li className="album__content-li">
            <div className="album__content-card">
               <img src={this.props.album.artworkUrl100} />
               <div className="album__content-name">{this.props.album.collectionCensoredName}</div>
            </div>
          </li>
      </>
    );
  }
}

export default AlbumItem;
