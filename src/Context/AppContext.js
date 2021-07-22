import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
export const DevThemeContext = createContext();
export const UserContext = createContext({ name: 'Guest' });




function AppProvider({ children }) {
  const [state, setState] = useState({
    devStyle: [],
  });

  // ================ GET DEV STYLE ================ //
  async function getDevStyle() {
    await fetch(`http://localhost:2001/dev`)
    .then(res => res.json())
    .then(res => setState({devStyle: res[res.length-1]}))
  }
  useEffect(() => {
    getDevStyle();
  }, [])

  // ================ ### ================ //

  // ================ PASS TO CHILDREN ================ //

  const globalVals = {
    state,
    setState,
  };

  return (
      <AppContext.Provider value={globalVals}>
        {children}
      </AppContext.Provider>
  )
}

export default AppProvider;
