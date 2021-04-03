import Gist from './Gist.js';

function GistContainer({ gistList }) {
  return (
    <div>
      <Gist />
      <div>{JSON.stringify(gistList)}</div>
      <Gist />
    </div>
  );
}

export default GistContainer;