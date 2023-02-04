import { createContext, useState } from "react";
import { songList } from "../data/songs";

export const ContextSong = createContext(null);

function Context({ children }) {
  const [songs, setSongs] = useState(songList);
  const [currentSong, setCurrentSong] = useState(null);
  const [token, setToken] = useState(false);
  const [auth, setAuth] = useState(false);
  return (
    <ContextSong.Provider
      value={{
        currentSong,
        setCurrentSong,
        songs,
        setSongs,
        token,
        setToken,
        auth,
        setAuth
      }}
    >
      {children}
    </ContextSong.Provider>
  );
}

export default Context;
