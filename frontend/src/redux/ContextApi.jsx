import { createContext, useContext } from "react";

const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
    


  return <NoteContext.Provider value={"adnan"}></NoteContext.Provider>;
};

const UseNoteContext = () => useContext(NoteContext);

export { NoteContextProvider, UseNoteContext };
