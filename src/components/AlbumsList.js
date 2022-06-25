import React from "react";
import AlbumItem from "./AlbumItem";

//pass an array of albums as a prop and use map function
const AlbumsList = ({ albums, loading }) => {
  return (
    <>
      <section id="album__container">
        <ol id="album__content">
          {albums.map((album) => (
            <AlbumItem key={album.collectionId} album={album} />
          ))}
        </ol>
      </section>
    </>
  );
};

export default AlbumsList;
