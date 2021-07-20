import { useState, useEffect } from 'react';
import './resources.css'

  export default function Resources() {
    const[inputsRetrieved, setInputsRetrieved] = useState([]);

    async function getInputs() {
      await fetch('http://localhost:2001/resources')
      .then(res => res.json())
      .then(res => setInputsRetrieved(res))
    }
    useEffect(() => {
      getInputs();
    }, [])

    return (
      <>
        <h1 className="border-bottom">Resources</h1>
        {inputsRetrieved.map(resource => <>
              <div>{resource.title}</div>
              <div>{resource.url}</div>
              <div>{resource.description}</div>
              <div>{resource.tags}</div>
        </>)}
      </>
    )
  }
