import File from './File.js';

function GistDetail({ setGistClicked, gistDetail }) {
  function gistClickHandler(e) {
    setGistClicked(false);
  }

  return (
    <div>
      <div onClick={gistClickHandler} className='left-col description'>
        GO BACK
      </div>
      {gistDetail.map((file, index) => {
        return (
          <File
            key={index}
            fileName={file[0]}
            fileContents={file[1]}
            setGistClicked={setGistClicked}
          />
        );
      })}
    </div>
  );
}

export default GistDetail;
