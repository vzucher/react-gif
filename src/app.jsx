import React, { Component } from 'react'
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif-list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "3o8doT5DaMjfH3paHC"
    }
  }

  search = (query) => {
    // Search with options using callback
    giphy().search({
        q: query,
        rating: 'g',
        limit: 10
    }, (error, result) => {
        // Res contains gif data!
       this.setState({
        gifs: result.data,
      });
    });
  }


  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
