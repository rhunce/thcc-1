import React, { useState } from 'react';
import UsernameSearch from './UsernameSearch.js';
import GistContainer from './GistContainer.js';
import GistDetail from './GistDetail.js';

function App() {
  const [gistList, setGistList] = useState([]);
  const [gistClicked, setGistClicked] = useState(false);

  return (
    <div className='App'>
      <UsernameSearch setGistList={setGistList} />
      {gistClicked ? (
        <GistDetail />
      ) : (
        <GistContainer gistList={gistList} setGistClicked={setGistClicked} />
      )}
    </div>
  );
}

export default App;
