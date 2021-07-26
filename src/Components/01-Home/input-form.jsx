import {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './home.css'

export default function ToolInput() {
  const [type, setType] = useState('research');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [inputs, setInputs] = useState({})
  const [resources, setResources] = useState({})
  const [templates, setTemplates] = useState({})
  const [researchItems, setResearchItems] = useState({})
  const [tags, setTags] = useState ([])
  const [tagString, setTagString] = useState('')


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


function handleCheck(e) {
  if (e.target.checked) {
    setTags([...tags, e.target.value])
  } else {
    setTags(tags.filter(tag => tag !== e.target.value))
  }
}


// ================ SUBMIT ================ //

  function handleSubmit() {

    setInputs({ type: type, title: title, url: url, description: description, tags: tagString })
    setResources({ title: title, url: url, description: description, tags: tagString })
    setTemplates({ title: title, content: description, tags: tagString })
    setResearchItems({ title: title, url: url, description: description, tags: tagString })
    setTitle('')
    setDescription('')
    setUrl('')

    console.log('Inputs are now: ', inputs)
    console.log(`Operating in `, {ENVIRONMENT: process.env.NODE_ENV})
    console.log(`Server Endpoint `,{SERVER_ENDPOINT: process.env.REACT_APP_SERVER_ENDPOINT })
  }

// ================ POST TO SERVER ================ //


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

  useEffect(() => {
    const selectedTagString = tags.join(', ')
    console.log('selected tags as string: ', selectedTagString)
    setTagString(selectedTagString)
  })


  // ================ DISPLAY  ================ //

    return (
      <>
  <div className="input-mod m-5">
    <div className="tool-input">

      <div className="info">
          <div className="container" onChange={handleType}>
            <div className="row type-buttons">
                <input type="radio" className="btn-check" name="tag" id="resource" />
                <label className="btn btn type" aria-pressed="true" for="resource">add resource</label>
            </div>
            <div className="row type-buttons">
                <input type="radio" className="btn-check" name="tag" id="template" />
                {/* <label className="btn btn type" for="template"><Link to="/templates"> add template</Link></label> */}
                <label className="btn btn type" for="template">add template</label>
            </div>
            <div className="row type-buttons">
                <input type="radio" className="btn-check" name="tag" id="research" />
                <label className="btn btn type" for="research">add research item</label>
            </div>
          </div>
        </div>



      <form className="container input-form pb-3">
        <h2>Add to your Toolbox</h2>

        <div className='inputs'>
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
        </div>


          <div className="form-holder">
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


          <div className='form-submit'>
            <input type="submit" value="Submit" onClick={handleSubmit} className='btn-submit'/>
          </div>

      </form>
    </div>
  </div>


      </>
    )
  }
