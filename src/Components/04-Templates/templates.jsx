import { useState, useEffect, useContext } from "react";
import DeleteButton from '../../assets/objects/DeleteButton'
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
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                    View...
                  </button>

                  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">{template.title}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        {template.content}
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='description'>{template.description}</div>
                  <div className='tags'>{template.tags}</div>
              </div>
              <div onClick={(() => deleteItem(template.id))}><DeleteButton/></div>
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
