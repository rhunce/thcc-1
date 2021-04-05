import './App.css';

function Gist({ gist, setGistClicked, setGistDetail }) {
  function gistClickHandler(e) {
    e.preventDefault();
    const gist_id = e.target.title;
    let url = `https://api.github.com/gists/${gist_id}`;
    fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then((data) => data.json())
      .then((gist) => {
        console.log('gist: ', gist); // REMOVE THIS LATER!!!!
        let files = [];
        for (let file in gist.files) {
          console.log('file: ', file); // REMOVE THIS LATER!!!!
          files.push([gist.files[file].filename, gist.files[file].content]);
        }
        setGistDetail(files);
      })
      .then((gist) => setGistClicked(true))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <span
        title={gist.id}
        className='left-col description'
        onClick={gistClickHandler}
      >
        {gist.description}
      </span>
      <span className='right-col'>{gist.created_at.substring(0, 10)}</span>
    </div>
  );
}

export default Gist;
