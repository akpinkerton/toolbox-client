import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './braindump.css'

export default function ToolInput() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [inputs, setInputs] = useState({})
  const [resources, setResources] = useState({})
  const [templates, setTemplates] = useState({})
  const [researchItems, setResearchItems] = useState({})

  const [tags, setTags] = useState(
    {
      react: false,
      git: false,
      javascript: false,
      html: false,
      styling: false,
      sql: false,
      other: false
    }
  )

  function handleType(e) {
    setType(e.target.id)
  }


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

  function handleSubmit() {
    setInputs({ type: type, title: title, url: url, description: description, tags: tags })
    setResources({ title: title, url: url, description: description, tags: tags })
    setTemplates({ title: title, content: description, tags: tags })
    setResearchItems({ title: title, url: url, description: description, tags: tags })

    setTitle('')
    setDescription('')
    setUrl('')
    console.log('Inputs are now: ', inputs)
    console.log(`Operating in `, {ENVIRONMENT: process.env.NODE_ENV})
    console.log(`Server Endpoint `,{SERVER_ENDPOINT: process.env.REACT_APP_SERVER_ENDPOINT })
  }

  function postResource() {
    fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/resources`, {
      method: 'POST',
      body: JSON.stringify(resources),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log('Posted Resource', resources)
  }

  function postResearchItem() {
    fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/readinglist`, {
      method: 'POST',
      body: JSON.stringify(researchItems),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log('Posted Research Item', researchItems)
  }

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
      if( inputs.type === 'resource'){
        postResource()
      } else if (inputs.type === 'template') {
        postTemplate()
      } else if (inputs.type === 'research') {
        postResearchItem()
      }
    }
  }, [inputs])


    return (
      <>
    <div className="tool-input">

      <div className="info">
          <div class="container" onChange={handleType}>
            <div class="row type-buttons">
                <input type="radio" className="btn-check" name="tag" id="resource" />
                <label className="btn btn type" aria-pressed="true" for="resource">add resource</label>
            </div>
            <div class="row type-buttons">
                <input type="radio" className="btn-check" name="tag" id="template" />
                <label className="btn btn type" for="template">add template</label>
            </div>
            <div class="row type-buttons">
                <input type="radio" className="btn-check" name="tag" id="research" />
                <label className="btn btn type" for="research">add research item</label>
            </div>
          </div>
        </div>



      <form className="container input-form">
        <h2>Add to your Toolbox</h2>


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
            <input type="text" className="input-tool-fields" id="description" placeholder="description..." value={description} onChange={handleDescription} required/>
          </div>

          <div className="form-holder">
              <form>
                <div className="tag-buttons">
                  <input type="checkbox" className="btn-check" name="tag" onChange={() => {setTags({ ...tags, react: !tags.react })}} id="react" />
                  <label className="btn btn react" for="react">react</label>

                  <input type="checkbox" className="btn-check" onChange={() => {
                  setTags({ ...tags, git: !tags.git })
                }} name="tag" id="git" />
                <label className="btn btn git" for="git">git</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setTags({ ...tags, javascript: !tags.javascript })
                }} name="tag" id="javascript" />
                <label className="btn btn javascript" for="javascript">javascript</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setTags({ ...tags, html: !tags.html })
                }} name="tag" id="html" />
                <label className="btn btn html" aria-pressed="true" for="html">html</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setTags({ ...tags, styling: !tags.styling })
                }} name="tag" id="styling" />
                <label className="btn btn styling" for="styling">styling</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setTags({ ...tags, sql: !tags.sql })
                }} name="tag" id="sql" />
                <label className="btn btn sql" for="sql">sql</label>

                <input type="checkbox" className="btn-check" onChange={() => {
                  setTags({ ...tags, other: !tags.other })
                }} name="tag" id="other" />
                <label className="btn btn other" for="other">other</label>

                </div>
              </form>
          </div>


          <div className='form-submit'>
            <input type="submit" value="Submit" onClick={handleSubmit} className='btn-submit'/>
          </div>

      </form>
    </div>


      </>
    )
  }
