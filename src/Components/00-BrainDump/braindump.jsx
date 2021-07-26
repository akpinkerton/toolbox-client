import {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function TextArea() {
  const [file_name, setFile_Name] = useState('');
  const [file, setFile] = useState('');
  const [upload, setUpload] = useState({})
  var form = document.getElementById("myForm");


  function handleFile(e) {
    setFile(e.target.value)
    console.log('Upload is now: ', upload)

  }


// ================ SUBMIT ================ //

  function handleSubmit() {

    setUpload({ file_name: file_name, file: file})

    console.log(`Operating in `, {ENVIRONMENT: process.env.NODE_ENV})
    console.log(`Server Endpoint `,{SERVER_ENDPOINT: process.env.REACT_APP_SERVER_ENDPOINT })
  }

// ================ POST TO SERVER ================ //

  function postFile() {
    fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/uploads`, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'multipart/form-data.',
        'Content-Type': 'multipart/form-data.'
      }
    })
    console.log('Posted File', upload)
  }


  useEffect(() => {
    if (upload.type !== undefined) {
      postFile()
    }
  }, [upload])


  // ================ DISPLAY  ================ //

    return (
      <>
  <div className="col-md-8 input-mod">
      <form id="myform" className="container input-form">

          <div className='form-input'>
            <label for="file"></label>
            <input type="file" className="input-tool-fields" id="file" placeholder="file..." value={file} onChange={handleFile} required/>
          </div>

          <div className='form-submit'>
            <input type="submit" value="Submit" onClick={handleSubmit} className='btn-submit'/>
          </div>

      </form>
  </div>


      </>
    )
  }
