import { useState, useEffect } from 'react';
import './templates.css'

  export default function Templates() {
    const[inputsRetrieved, setInputsRetrieved] = useState([]);

    async function getInputs() {
      await fetch('http://localhost:2001/templates')
      .then(res => res.json())
      .then(res => setInputsRetrieved(res))
    }
    useEffect(() => {
      getInputs();
    }, [])

    return (
      <>
        <h1 className="border-bottom">Templates</h1>
        {inputsRetrieved.map(templates => <>
              <div>{templates.title}</div>
              <div>{templates.url}</div>
              <div>{templates.description}</div>
              <div>{templates.tags}</div>
              <div>{templates.status}</div>
        </>)}
      </>
    )
  }
