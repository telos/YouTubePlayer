import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import Config from '../config/config';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: []
    };

    let config = new Config();
    YTSearch({key: config.API_KEY, term: 'surfboards'}, (videos) => {
      console.log('Search complete: ' + videos);
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Component's generated HTML added to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
