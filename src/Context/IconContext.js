import { createContext, useContext, useState, useEffect} from "react";

const icons = {
  first: {
    text: 'hello'
  },
  second: {
    text: 'goodbye'
  }
};



const IconsContext = createContext(icons)

const useIcons = () => useContext(IconsContext);


export { IconsContext, useIcons}