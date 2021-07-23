import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import "./dev.css";
import warning from "./warning.png";

export default function DevBanner() {
  // ================ CONTEXT VARS ================ //
  const { state, setState } = useContext(AppContext);
  const { devStyle } = state;
  console.log("style from context: ", devStyle.type);
  const [update, updState] = useState(0);

  function updateState() {
    updState(prev => prev + 1)
  }

  // ================ POST MODE ================ //
  const [mode, setMode] = useState({});

  function handleMode(e) {
    setMode({ type: e.target.value });
  }

  function postMode() {
    fetch(`http://localhost:2001/dev`, {
      method: "POST",
      body: JSON.stringify(mode),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("Posted mode", mode);
  }

  useEffect(() => {
    postMode();
  }, [mode]);

  // ================ GET FROM CONTEXT ================ //
  async function getDevStyle() {
    await fetch(`http://localhost:2001/dev`)
    .then(res => res.json())
    .then(res => setState({devStyle: res[res.length-1]}))
  }
  useEffect(() => {
    getDevStyle();
  }, [update])


  // ================ DEV ELEMENTS ================ //
  const banner = () => {
    if (process.env.NODE_ENV !== "production") {
      return (
        <>
          <div className="row devBanner">
            <div className="col-2 border-test" id={`${devStyle.type}`}>

            </div>

            <div className="col-6 border-test">
              <img src={warning} alt="" />
              You are currently running in{" "}
              <span className="env">{process.env.NODE_ENV}</span> mode.
            </div>
            <div className="col-4 border-test">
              <div className="dev-mode-selector">
                <form id='six'>
                  <h4 id="form-title">Select Dev Mode</h4>
                  <div id="dev-slider" onChange={handleMode}>
                    <input type="radio" name="mode" id="one" value="one" required />
                    <label for="one"></label>

                    <input type="radio" name="mode"  id="two" value="two" required />
                    <label for="two"></label>

                    <input type="radio" name="mode" id="three" value="three" required />
                    <label for="three"></label>

                    <input type="radio" name="mode" id="four" value="four" required />
                    <label for="four"></label>

                    <input type="radio" name="mode" id="none" value="none" required />
                    <label for="none">none</label>
                  </div>
                  <button type='submit' onClick={updateState}>Change</button>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <>{banner()}</>;
}
