import { createContext, useState } from "react";
import { songList } from "../data/songs";

export const ContextSong = createContext(null);

function Context({ children }) {
  const [songs, setSongs] = useState(songList);
  const [currentSong, setCurrentSong] = useState(null);
  return (
    <ContextSong.Provider
      value={{
        currentSong,
        setCurrentSong,
        songs,
        setSongs,
      }}
    >
      {children}
    </ContextSong.Provider>
  );
}

export default Context;
