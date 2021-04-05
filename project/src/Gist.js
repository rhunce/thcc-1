import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function Gist({ gist, setGistClicked }) {
  function gistClickHandler(e) {
    setGistClicked(true);
  }

  return (
    <div>
      <span className='left-col description' onClick={gistClickHandler}>
        {gist.description}
      </span>
      <span className='right-col'>{gist.created_at.substring(0, 10)}</span>
    </div>
  );
}

export default Gist;
