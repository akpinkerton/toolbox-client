import { useState, useEffect } from 'react';
import './readinglist.css'
import link_white from '../../assets/img/link_white.png'
import DeleteButton from '../../assets/objects/DeleteButton'


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

// ================ DELETE RESOURCES ================ //

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

// ================ URL FORMATTING ================ //

    function urlFormat(url) {
      var website = new URL(url)
      var host = website.host;
      return host;
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
      console.log('Seeded Tag List: ', resource)
      const tagArray = resource.split(',')
      let matching = iconObj.filter(tagPairFromIconObj => (tagArray.includes(tagPairFromIconObj.tag)))
      let tagUrl = matching.map(item => item.url)
      return(<img src={tagUrl}/>)
    }

// ================ DISPLAY ================ //


    return (
      <>
    <div id='{`${theme.type}`}'>
      <div class="container list">
        <h1 className="border-bottom m-5">Research List</h1>

        <div class="list-card-container">
          {inputsRetrieved.map(list => <>
            <div class="list-card">

              <div className='content'>
                <h4 className='title'>{list.title}</h4>
                  <div className='description'>{list.description}</div>
                  <div className='tags'>{list.status}</div>
                  <div className='tags'>{list.tags}</div>
                <img src={link_white}/><a href={list.url} className='url'>{urlFormat(list.url)}</a>

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
