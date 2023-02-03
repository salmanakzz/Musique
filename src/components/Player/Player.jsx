import {
  faBackwardStep,
  faForwardStep,
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Player = ({
  songs,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
  currentSong,
}) => {
  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipBack = () => {
    let index = songs.findIndex((s) => s.id === currentSong.id);
    
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
  };

  const skipToNext = () => {
    let index = songs.findIndex((s) => s.id === currentSong.id);

    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
  };

  return (
    <div className="flex gap-4">
      <FontAwesomeIcon
        onClick={skipBack}
        icon={faBackwardStep}
        style={{ height: "2em", color: "#000", cursor: "pointer" }}
      />
      {isPlaying ? (
        <FontAwesomeIcon
          onClick={playPause}
          icon={faPauseCircle}
          style={{ height: "2em", color: "#000", cursor: "pointer" }}
        />
      ) : (
        <FontAwesomeIcon
          onClick={playPause}
          icon={faPlayCircle}
          style={{ height: "2em", color: "#000", cursor: "pointer" }}
        />
      )}
      <FontAwesomeIcon
        onClick={skipToNext}
        icon={faForwardStep}
        style={{ height: "2em", color: "#000", cursor: "pointer" }}
      />
    </div>
  );
};
