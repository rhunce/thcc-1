import Gist from './Gist.js';
import './App.css';

function GistContainer({ gistList, setGistClicked, setGistDetail }) {
  return (
    <div>
      <span className='left-col'>Description</span>
      <span className='right-col'>Date Created</span>
      {gistList.map((gist) => {
        return (
          <Gist
            key={gist.id}
            gist={gist}
            setGistClicked={setGistClicked}
            setGistDetail={setGistDetail}
          />
        );
      })}
    </div>
  );
}

export default GistContainer;
