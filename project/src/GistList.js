import React, { useState, useEffect } from 'react';

function GistList() {

  const [userName, setUserName] = useState('bradtraversy');
  const [userGists, setUserGists] = useState([]);

  useEffect(() => {
    console.log('BAM!!!');
  });

  function submitButtonHandler(e) {
    e.preventDefault();
    let url = `https://api.github.com/users/${userName}/gists`;
    fetch(url)
      .then(data => data.json())
      .then(gists => setUserGists(gists))
      .catch(err => console.error(err));
  }

  return (
    <div>
        <label htmlFor="username">Enter Username:</label>
        <br />
        <input type="text" id="username" name="username" onChange={(e) => {setUserName(e.target.value)}}/>
        <br />
        <input type="submit" value="Submit" onClick={submitButtonHandler}/>
        <div>{userName}</div>
        <div>{JSON.stringify(userGists)}</div>
    </div>
  );
}

export default GistList;