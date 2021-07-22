import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './dev.css'
import warning from './warning.png'

  export default function DevBanner() {

    // ================ POST MODE ================ //
    const [mode, setMode] = useState({});

    function handleMode(e) {
      setMode({ type: e.target.value })
    }

    function postMode() {
      fetch(`http://localhost:2001/dev`, {
        method: 'POST',
        body: JSON.stringify(mode),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      console.log('Posted mode', mode)
    }

    useEffect(() => {
      postMode()
    }, [mode])


    // ================ GET MODE ================ //
    const[styleRetrieved, setStyle] = useState([]);

    async function getMode() {
      await fetch(`http://localhost:2001/dev`)
      .then(res => res.json())
      .then(res => setStyle(res))
    }
    useEffect(() => {
      getMode();
    }, [])











    const banner = () => {
      if(process.env.NODE_ENV !== "production"){
        return (<>
          <div className='row devBanner'>


          <div className='col-2 border-test'>

{styleRetrieved.map(style => <>

</>)}

          </div>
          <div className='col-6 border-test'>

          <img src={warning} alt=''/>
          You are currently running in <span className='env'>{process.env.NODE_ENV}</span> mode.


          </div>
          <div className='col-4 border-test'>


          <div className='dev-mode-selector'>
            <form>
              <h4 id="form-title">Select Dev Mode</h4>
              <div id="dev-slider" onChange={handleMode}>

                <input type="radio" name="mode" id="1" value="1" required/>
                <label for="1"></label>

                <input type="radio" name="mode" id="2" value="2" required/>
                <label for="2"></label>

                <input type="radio" name="mode" id="3" value="3" required/>
                <label for="3"></label>

                <input type="radio" name="mode" id="4" value="4" required/>
                <label for="4"></label>

                <input type="radio" name="mode" id="5" value="5" required/>
                <label for="5"></label>
              </div>
            </form>
          </div>

          </div>





          </div>
        </>)
      }
    }

    return (
      <>
      {banner()}
      </>
    )
  }
