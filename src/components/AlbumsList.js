import React from "react";
import AlbumItem from "./AlbumItem";
// import Spinner from "../layout/Spinner";

//pass an array of albums as a prop and use map function
//refactored class comp to functional comp
const AlbumsList = ({ albums, loading }) => {
  //   if (loading) {
  //     return <Spinner />;
  //   } else {
  return (
    <div style={albumStyle}>
      {albums.map((album) => (
        <AlbumItem album={album} />
      ))}
    </div>
  );
};

//add style: items lined up horizontally
const albumStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridGap: "1rem",
};

export default AlbumsList;
