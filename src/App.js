import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
// import logo from './logo.svg';
import './App.css';
  
function App() {

  const onDrop = useCallback(acceptedFiles => {
    alert('Hurrah! File uploaded. Your system is now a step safer!')
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  return (
    <div className="App">
      <header className="App-header">
        File checker
        <p className="about">Upload a suspicious looking file if you need to check for maliciousness</p>
        <p className="about">:)</p>
      </header>
      <body>
        <div {...getRootProps()} className="drop-comp">
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      </body>
    </div>
  );
}


export default App;
