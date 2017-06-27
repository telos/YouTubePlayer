import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import Config from '../config/config';

import SearchBar from './components/search_bar';

// Create a new component that produces HTML
const App = () => {
  let config = new Config();

  YTSearch({key: config.API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
  })

  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Component's generated HTML added to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
