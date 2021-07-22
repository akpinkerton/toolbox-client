import { useState, useEffect } from 'react';
import './resources.css'

  export default function Resources() {
    const[inputsRetrieved, setInputsRetrieved] = useState([]);

    async function getInputs() {
      await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/resources`)
      .then(res => res.json())
      .then(res => setInputsRetrieved(res))
    }
    useEffect(() => {
      getInputs();
    }, [])

    return (
      <div className="dev-mode-white">
        <div class="container resources">
        <h1 className="border-bottom">Resources</h1>
    <div class="resource-card-container">

        {inputsRetrieved.map(resource => <>
      <div class="overlay"></div>
      <div class="overlay"></div>
      <div class="overlay"></div>
      <div class="overlay"></div>
      <div class="resource-card">
        <h4>{resource.title}</h4>
              <div className='description'>{resource.description}</div>
              <div className='tags'>{resource.tags}</div>
        <span className="chev">&rsaquo;</span>
      </div>
        </>)}
    </div>

</div>


      </div>
    )
  }
