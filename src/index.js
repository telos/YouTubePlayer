import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// Create a new component that produces HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Component's generated HTML added to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
