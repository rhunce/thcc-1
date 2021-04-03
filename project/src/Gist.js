import './App.css';

function Gist({ gist }) {
  return (
    <div>
      <span className='left-col'>{gist.description}</span>
      <span className='right-col'>{gist.created_at.substring(0, 10)}</span>
    </div>
  );
}

export default Gist;