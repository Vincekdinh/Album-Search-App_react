import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import HorizontalRule from "./HorizontalRule";
import axios from "axios";
import AlbumsList from "./AlbumsList";

class App extends React.Component {
  state = { albums: [] };

  //Search albums from Apple API
  onSearchSubmit = async (searchTerm) => {
    console.log(searchTerm);
    let searchURL = `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album&attribute=artistTerm&limit=100`;
    const res = await axios.get(searchURL);
    console.log(res);
    this.setState({ albums: res.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Header />
        <HorizontalRule />
        <div className='container'>
          Results:{this.state.albums.length}
          <AlbumsList albums={this.state.albums} />
        </div>
      </div>
    );
  }
}
export default App;
