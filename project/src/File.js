import './App.css';

function File({ fileName, fileContents }) {
  return (
    <div>
      <div>{fileName}</div>
      <div>{fileContents}</div>
    </div>
  );
}

export default File;
