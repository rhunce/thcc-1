import React, { useState } from 'react';

function UsernameSearch({ setGistList }) {

  const [userName, setUserName] = useState('');

  function submitButtonHandler(e) {
    e.preventDefault();
    let url = `https://api.github.com/users/${userName}/gists`;
    fetch(url)
      .then(data => data.json())
      .then(gists => setGistList(gists))
      .catch(err => console.error(err));
  }

  return (
    <div>
        <label htmlFor="username">Enter Username:</label>
        <br />
        <input type="text" id="username" name="username" placeholder='e.g. bradtraversy' onChange={(e) => {setUserName(e.target.value)}}/>
        <br />
        <input type="submit" value="Submit" onClick={submitButtonHandler}/>
    </div>
  );
}

export default UsernameSearch;