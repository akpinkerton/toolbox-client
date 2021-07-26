import { useState, useEffect, useContext } from "react";
import './templates.css'


export default function Templates() {

// ================ GET TEMPLATES ================ //

  const[inputsRetrieved, setInputsRetrieved] = useState([]);
  const [currentItems, setCurrentItems] = useState(false);

  function getInputs() {
     fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/templates`)
    .then(res => res.json())
    .then(json => setInputsRetrieved(json))
  }
  useEffect(() => {
    getInputs();
  }, [currentItems])

// ================ GET ICONS ================ //

    const[icons, setIcons] = useState([]);

    async function getIcons() {
      await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/icons`)
      .then(res => res.json())
      .then(res => setIcons(res))
    }
    useEffect(() => {
      getIcons();
    }, [])

// ================ DELETE TEMPLATES ================ //

const deleteItem = (id) => {
  fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/templates`, {
    method: 'DELETE',
    body: JSON.stringify({ id: id }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  setCurrentItems(true)
}

useEffect(() => {
  setCurrentItems(false)
}, [inputsRetrieved])


// ================ DISPLAY ICONS BASED ON TAG ================ //


function dispIcons (template, iconObj) {
  console.log('Seeded Tag List: ', template)
  console.log('icon object', iconObj)
  const tagArray = template.split(',')
  console.log('tagArray', tagArray)

  let matching = iconObj.filter(tagPairFromIconObj => (tagArray.includes(tagPairFromIconObj.tag)))
  console.log('Matching', matching)

  let tagUrl = matching.map(item => item.url)
  return(<img src={tagUrl}/>)
}

// ================ DISPLAY ================ //

  return (
    <div id='{`${theme.type}`}'>
      <div class="container templates">
        <h1 className="border-bottom m-5">Templates</h1>

        <div class="template-card-container">
          {inputsRetrieved.map(template => <>
            <div class="template-card">

              <div className='content'>
                <h4 className='title'>{template.title}</h4>
                  <div className='description'>{template.description}</div>
                  <div className='tags'>{template.tags}</div>
                <button className='btn btn' onClick={(() => deleteItem(template.id))}>delete</button>
              </div>

              <div className='icons'>
                {dispIcons(template.tags, icons)}
              </div>

            </div>
          </>)}
        </div>
      </div>
    </div>
  )
}
