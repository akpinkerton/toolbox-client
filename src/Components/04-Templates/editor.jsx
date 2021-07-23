import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './templates.css'


  export default function TemplateEditor() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [inputs, setInputs] = useState({})
    const [templates, setTemplates] = useState({})
    const [tags, setTags] = useState ([])
    const [tagString, setTagString] = useState('')

// ================ EDITOR ================ //

    const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty(),
    );
    const  [convertedContent, setConvertedContent] = useState(null);

    const handleEditorChange = (state) => {
      setEditorState(state);
      convertContentToHTML();
    }
    const convertContentToHTML = () => {
      let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
      setConvertedContent(currentContentAsHTML);
    }

    const createMarkup = (html) => {
      return  {
        __html: DOMPurify.sanitize(html)
      }
    }
// ================ HANDLERS ================ //

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

    useEffect(() => {
      const selectedTagString = tags.join(', ')
      console.log('selected tags as string: ', selectedTagString)
      setTagString(selectedTagString)
    })

// ================ SUBMIT ================ //

    const handleSubmit = () => {
      setInputs({ title: title, url: url, description: description, tags: tagString })
      setTemplates({ title: title, content: description, tags: tagString })
      setTitle('')
      setDescription('')
      setUrl('')


    }


// ================ POST ================ //

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
          postTemplate()
      }
    }, [inputs])

    return (<>
        <header className="editor-header">
          Rich Text Editor Example
        </header>
      <div className="editor-container d-flex">
      <form className="editor border-test col-6">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        <input type="submit" value="Submit" onClick={handleSubmit} className='btn-submit'/>

      </form>

        <div className="preview border-test col-6" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
    </div>




    <div className="col-md-8 input-mod">
    <div className="tool-input">

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






    </>)
  }