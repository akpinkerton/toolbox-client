import { useState, useEffect } from 'react';
import './readinglist.css'
import link_white from '../../assets/img/link_white.png'
import DeleteButton from '../../assets/objects/DeleteButton'
import done from '../../assets/img/done.png';
import newStat from '../../assets/img/new.png';
import progress from '../../assets/img/progress.png';
import { Editor } from 'draft-js';
import EditButton from '../../assets/objects/EditButton';
import statusBox from '../../assets/img/statusBox.png';




  export default function ReadingList() {

// ================ GET RESOURCES ================ //
    const[inputsRetrieved, setInputsRetrieved] = useState([]);
    const [currentItems, setCurrentItems] = useState(false);


    async function getInputs() {
      await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/readinglist`)
      .then(res => res.json())
      .then(res => setInputsRetrieved(res))
    }
    useEffect(() => {
      getInputs();
    }, [currentItems])

// ================ DELETE ITEMS ================ //

      const deleteItem = (id) => {
        fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/readinglist`, {
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

// ================ STATUS MENU ================ //

const [showList, setShowList] = useState(false);

const toggleList = (e) => {
  setShowList(!showList)
}

function StatusList() {
  return(<>
      <img className="status-list" alt='' src={statusBox} onClick={toggleList}/>

      <div className="menu">
        <div className="" onChange={handleStatus}>
          <div className="row status-buttons">
              <input type="radio" className="btn-check" name="status" id="new" />
              <label className="btn btn new" for="new">new</label>
          </div>
          <div className="row status-buttons">
              <input type="radio" className="btn-check" name="status" id="in-progress" />
              <label className="btn btn prog" for="in-progress">in-progress</label>
          </div>
          <div className="row status-buttons">
              <input type="radio" className="btn-check" name="status" id="done" />
              <label className="btn btn done" for="done">done</label>
          </div>
        </div>
      </div>
    </>)
}


// ================ UPDATE STATUS ================ //
const [status, setStatus] = useState('')
const [ updID, setUpdID ] = useState(0)

function handleStatus(e) {
  setStatus(e.target.value)
  console.log('status:', status)
}

const updateStatus = async (id) => {
  console.log("updating id: ", id)
  await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/readinglist/${id}`, {
    method: 'PUT',
    body:  JSON.stringify({ status: status }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  setCurrentItems(true)
}

// ================ URL FORMATTING ================ //

function urlFormat(url) {

  if(url){
    console.log('url:', url)
    var website = new URL(url)
    var host = website.host;
    console.log('host:', host)
    return host;
  } else {
    return '';
  }
}

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

// ================ DISPLAY ICONS BASED ON TAG ================ //


    function dispIcons (resource, iconObj) {
      const tagArray = resource.split(',')
      let matching = iconObj.filter(tagPairFromIconObj => (tagArray.includes(tagPairFromIconObj.tag)))
      let tagUrl = matching.map(item => item.url)
      console.log('matching: ',matching)
      return(<img src={tagUrl}/>)
    }

// ================ DISPLAY ================ //


    return (
      <>
    <div id='{`${theme.type}`}'>
      <div className="container list">
        <h1 className="border-bottom m-5">Research List</h1>

        <div className="list-card-container">
          {inputsRetrieved.map(list => <>
            <div className="list-card">



            <div className='center px-3' > <img className="status-btn" alt='' src={
                        list.status === 'new' ? newStat :
                        list.status === 'in-progress' ? progress :
                        list.status === 'done' ? done : '' }/>
                        <div className='tags'>{list.status}</div>
            </div>
              <div className='content'>
                <h4 className='title'>{list.title}</h4>
                  <div className='description'>{list.description}</div>



                  <div className='tags'>{list.tags}</div>

                <img src={link_white}/><a href={list.url} className='url'>{urlFormat(list.url)}</a>

              </div>
              <div onClick={toggleList} data-toggle="modal" data-target="#statusModal" ><EditButton/></div>


              <div className="modal fade" id="statusModal" tabindex="-1" role="dialog" aria-labelledby="statusModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="statusModalLabel">Update Status</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                        <select className="custom-select" id="statusSelect" onChange={handleStatus}>
                          <option selected>Update Status....</option>
                          <option value="new">New</option>
                          <option value="in-progress">In-progress</option>
                          <option value="done">Done</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(() => updateStatus(list.id))}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>



              <div onClick={(() => deleteItem(list.id))}><DeleteButton/></div>
              <div className='icons'>
                {dispIcons(list.tags, icons)}
              </div>

            </div>
          </>)}
        </div>
      </div>
    </div>






      </>
    )
  }
