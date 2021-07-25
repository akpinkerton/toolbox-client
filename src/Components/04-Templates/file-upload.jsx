import {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './templates.css'

export default function TextArea() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState('');
  const [inputs, setInputs] = useState({})
  const [templates, setTemplates] = useState({})
  const [tags, setTags] = useState ([])
  const [tagString, setTagString] = useState('')

  function handleTitleInput(e) {
    setTitle(e.target.value)
    console.log('title:', title)
  }

  function handleUrlInput(e) {
    setUrl(e.target.value)
    console.log('url:', url)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  function handleFile(e) {
    setFile(e.target.value)
  }

function handleCheck(e) {
  if (e.target.checked) {
    setTags([...tags, e.target.value])
  } else {
    setTags(tags.filter(tag => tag !== e.target.value))
  }
}

// ================ SUBMIT ================ //

  function handleSubmit() {

    setInputs({ type: 'template', title: title, url: url, description: description, file: file, tags: tagString })
    setTemplates({ title: title, content: description, tags: tagString })
    setTitle('')
    setDescription('')
    setUrl('')

    console.log('Inputs are now: ', inputs)
    console.log(`Operating in `, {ENVIRONMENT: process.env.NODE_ENV})
    console.log(`Server Endpoint `,{SERVER_ENDPOINT: process.env.REACT_APP_SERVER_ENDPOINT })
  }

// ================ POST TO SERVER ================ //

  function postTemplate() {
    fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/templates`, {
      method: 'POST',
      body: JSON.stringify(templates),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log('Posted Template', templates)
  }


  useEffect(() => {
    if (inputs.type !== undefined) {
       if (inputs.type === 'template') {
        postTemplate()
      }
    }
  }, [inputs])

  useEffect(() => {
    const selectedTagString = tags.join(', ')
    console.log('selected tags as string: ', selectedTagString)
    setTagString(selectedTagString)
  })


  // ================ DISPLAY  ================ //

    return (
      <>
  <div className="col-md-8 input-mod">
    <div className="tool-input">

      <div className="info">
        <div className="form-holder p-4">
              <form>
                <div className="tag-buttons">
                  <input type="checkbox" className="btn-check" name="tag" onChange={handleCheck} id="react" value="React" />
                  <label className="btn btn react" for="react">react</label>

                  <input type="checkbox" className="btn-check" onChange={handleCheck} name="tag" id="git" value="Git" />
                <label className="btn btn git" for="git">git</label>

                <input type="checkbox" className="btn-check" onChange={handleCheck} name="tag" id="javascript" value="Javascript" />
                <label className="btn btn javascript" for="javascript">javascript</label>

                <input type="checkbox" className="btn-check" onChange={handleCheck} name="tag" id="html" value="HTML" />
                <label className="btn btn html" for="html">html</label>

                <input type="checkbox" className="btn-check" onChange={handleCheck} name="tag" id="styling" value="Styling" />
                <label className="btn btn styling" for="styling">styling</label>

                <input type="checkbox" className="btn-check" onChange={handleCheck} name="tag" id="sql" value="SQL" />
                <label className="btn btn sql" for="sql">sql</label>

                <input type="checkbox" className="btn-check" onChange={handleCheck} name="tag" id="other" value="Other" />
                <label className="btn btn other" for="other">other</label>

                </div>
              </form>
          </div>
        </div>



      <form className="container input-form">

          <div className='form-input'>
            <label for="title"></label>
            <input type="text" className="input-tool-fields" id="title" placeholder="title..." value={title} onChange={handleTitleInput} required/>
          </div>

          <div className='form-input'>
            <label for="url"></label>
            <input type="url" className="input-tool-fields" id="url" placeholder="url..." value={url} onChange={handleUrlInput} required/>
          </div>

          <div className='form-input'>
            <label for="description"></label>
            <textarea type="text" className="input-tool-fields" id="description" placeholder="description..." value={description} onChange={handleDescription} required/>
          </div>

          <div className='form-input'>
            <label for="file"></label>
            <input type="file" className="input-tool-fields" id="file" placeholder="file..." value={file} onChange={handleFile} required/>
          </div>

          <div className='form-submit'>
            <input type="submit" value="Submit" onClick={handleSubmit} className='btn-submit'/>
          </div>

      </form>
    </div>
  </div>


      </>
    )
  }
