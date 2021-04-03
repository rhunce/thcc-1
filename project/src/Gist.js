import './App.css';

function Gist({ gist }) {

  function gistClickHandler(e) {
    console.log('CLICK!: ', e.target.innerHTML)
  }

  return (
    <div >
      <span className='left-col description' onClick={gistClickHandler}>{gist.description}</span>
      <span className='right-col'>{gist.created_at.substring(0, 10)}</span>
    </div>
  );
}

export default Gist;