/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect, useContext } from "react";
import './resources.css'
import { AppContext } from "../../Context/AppContext";
import link_white from '../../assets/img/link_white.png'


export default function Resources() {

// ================ CONTEXT VARS ================ //
// import { useState, useEffect, useContext } from "react";
// import { AppContext } from "../../Context/AppContext";
const { state, setState } = useContext(AppContext);
const { devStyle } = state;
//console.log("style from context: ", devStyle.type);

// ================ GET RESOURCES ================ //

  const[inputsRetrieved, setInputsRetrieved] = useState([]);

  async function getInputs() {
    await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/resources`)
    .then(res => res.json())
    .then(res => setInputsRetrieved(res))
  }
  useEffect(() => {
    getInputs();
  }, [])

// ================ GET RESOURCES ================ //

    const[icons, setIcons] = useState([]);

    async function getIcons() {
      await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/icons`)
      .then(res => res.json())
      .then(res => setIcons(res))
    }
    useEffect(() => {
      getIcons();
    }, [])

// ================ URL FORMATTING ================ //

function urlFormat(url) {
  var website = new URL(url)
  var host = website.host;
  return host;
}

// ================ DISPLAY ICONS BASED ON TAG ================ //

function dispIcons (resource, iconObj) {
  const tagArray = resource.split(',')
  let matching = iconObj.filter(tagPairFromIconObj => (tagArray.includes(tagPairFromIconObj.tag)))
  let tagUrl = matching.map(item => item.url)
  return(<img src={tagUrl}/>)
}

// ================ DISPLAY ================ //

  return (
    <div id={`${devStyle.type}`}>
      <div class="container resources">
        <h1 className="border-bottom m-5">Resources</h1>

        <div class="resource-card-container">
          {inputsRetrieved.map(resource => <>
            <div class="resource-card">

              <div className='content'>
                <h4 className='title'>{resource.title}</h4>
                  <div className='description'>{resource.description}</div>
                  <div className='tags'>{resource.tags}</div>
                <img src={link_white}/><a href={resource.url} className='url'>{urlFormat(resource.url)}</a>
              </div>

              <div className='icons'>
                {dispIcons(resource.tags, icons)}
              </div>

            </div>
          </>)}
        </div>
      </div>
    </div>
  )
}
