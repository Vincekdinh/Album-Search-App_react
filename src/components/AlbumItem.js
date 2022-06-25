import React, { Component } from "react";

class AlbumItem extends Component {
  render() {
    const { artworkUrl100, collectionName } = this.props.album
    return (
      <>
        <li className="album__content-li">
            <div className="album__content-card">
               <img alt={collectionName} src={artworkUrl100} />
               <div className="album__content-name">{this.props.album.collectionCensoredName}</div>
            </div>
          </li>
      </>
    );
  }
}

export default AlbumItem;
