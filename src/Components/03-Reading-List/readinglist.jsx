import { useState, useEffect } from 'react';
import './readinglist.css'

  export default function ReadingList() {
    const[inputsRetrieved, setInputsRetrieved] = useState([]);

    async function getInputs() {
      await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}/readinglist`)
      .then(res => res.json())
      .then(res => setInputsRetrieved(res))
    }
    useEffect(() => {
      getInputs();
    }, [])

    return (
      <>
        <h1 className="border-bottom">Reading List</h1>
        {inputsRetrieved.map(readinglist => <>
              <div>{readinglist.title}</div>
              <div>{readinglist.url}</div>
              <div>{readinglist.description}</div>
              <div>{readinglist.tags}</div>
              <div>{readinglist.status}</div>
        </>)}
      </>
    )
  }
