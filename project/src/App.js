import React, { useState } from 'react';
import UsernameSearch from './UsernameSearch.js';
import GistContainer from './GistContainer.js';
import GistDetail from './GistDetail.js';

function App() {
  const [gistList, setGistList] = useState([]);
  const [gistClicked, setGistClicked] = useState(false);
  const [gistDetail, setGistDetail] = useState([]);

  return (
    <div className='App'>
      <UsernameSearch setGistList={setGistList} />
      {gistClicked ? (
        <GistDetail setGistClicked={setGistClicked} gistDetail={gistDetail} />
      ) : (
        <GistContainer
          gistList={gistList}
          setGistClicked={setGistClicked}
          setGistDetail={setGistDetail}
        />
      )}
    </div>
  );
}

export default App;
