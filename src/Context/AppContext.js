import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [state, setState] = useState({
    devStyle: [],
  });

  // this is just a convenience so that we can call a function
  function getJSON(res) {
    return res.json();
  }

  // get a product list on load
  useEffect(() => {
    async function getDevStyle() {
      const res = await fetch(`http://localhost:2001/dev`);
      const data = await getJSON(res);

      setState({ devStyle: data });
    }
    getDevStyle();
  }, []);

  const globalVals = {
    state,
    setState,
  };

  return <AppContext.Provider value={globalVals}>{children}</AppContext.Provider>;
}

export default AppProvider;
