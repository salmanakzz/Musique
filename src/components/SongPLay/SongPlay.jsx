import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "primereact/card";
import React, { useContext, useEffect, useRef, useState } from "react";
import { songList } from "../../data/songs";
import { ContextSong } from "../../store/store";
import { Player } from "../Player/Player";

export const SongPlay = () => {
  const { currentSong, setCurrentSong } = useContext(ContextSong);
  const [songs, setSongs] = useState(songList);
  const [isPlaying, setIsPlaying] = useState(true);

  const audioRefElem = useRef();

  const clickRef = useRef();

  const checkWidth = (e) => {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioRefElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRefElem?.current?.play();
    } else {
      audioRefElem?.current?.pause();
    }
  }, [isPlaying, currentSong]);

  const onPlaying = () => {
    const duration = audioRefElem.current.duration;
    const cc = audioRefElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (cc / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className={currentSong ? "fixed bottom-0 w-[78%] song-play" : "fixed bottom-0"}>
      <Card style={{ background: "#F59E0B", color: "#000" }}>
        <div className="flex justify-start items-center gap-3">
          {currentSong ? (
            <>
              <img
                src={currentSong?.image}
                alt=""
                className="rounded-[.5rem] w-[110px] "
              />
              <h1 className="font-semibold w-[200px] current-play-title">{currentSong?.title}</h1>
              <div className="flex items-center gap-[4.6rem] mx-[1rem] controls">
                <div className="w-[34vw]">
                  <div
                    className="navigation_wrapper"
                    onClick={checkWidth}
                    ref={clickRef}
                  >
                    <div
                      className="seek-bar"
                      style={{ width: `${currentSong.progress + "%"}` }}
                    ></div>
                  </div>
                </div>
                <audio
                  src={currentSong.fileUrl}
                  ref={audioRefElem}
                  onTimeUpdate={onPlaying}
                />
                <div className="flex right-[4%] control-icons-2">
                  <Player
                    songs={songs}
                    setSongs={setSongs}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faPlayCircle}
                style={{ height: "2em", color: "#000" }}
              />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
