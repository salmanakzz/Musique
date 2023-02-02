import { createContext, useState } from "react";
import { songList } from "../data/songs";

export const ContextSong = createContext(null);

function Context({ children }) {
  const [songs, setSongs] = useState(songList);
  const [currentPlay, setCurrentPlay] = useState(null);
  return (
    <ContextSong.Provider
      value={{
        currentPlay,
        setCurrentPlay,
        songs,
        setSongs,
      }}
    >
      {children}
    </ContextSong.Provider>
  );
}

export default Context;
