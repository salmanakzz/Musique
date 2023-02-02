import React, { useContext } from "react";
import { SongCard } from "../SongCard/SongCard";
import { ContextSong } from "../../store/store";

export const Body = () => {
  const { songs } = useContext(ContextSong);
  return (
    <div className="mt-[6.1rem] ml-2">
      {songs.map((song) => (
        <SongCard song={song} key={song.id} />
      ))}
    </div>
  );
};
