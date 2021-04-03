import React, { useState } from 'react';
import UsernameSearch from './UsernameSearch.js';
import GistContainer from './GistContainer.js';


function App() {

  const [gistList, setGistList] = useState([]);

  return (
    <div className="App">
      <UsernameSearch setGistList={setGistList}/>
      <GistContainer gistList={gistList}/>
    </div>
  );
}

export default App;