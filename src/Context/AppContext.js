import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
export const DevThemeContext = createContext();
export const UserContext = createContext({ name: 'Guest' });




function AppProvider({ children }) {
  const [state, setState] = useState({
    devStyle: [],
  });

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
