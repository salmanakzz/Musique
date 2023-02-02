import React, { useContext } from "react";
import { Card } from "primereact/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ContextSong } from "../../store/store";

export const SongCard = ({ song }) => {
  const { id, title, image, source, date } = song;

  const { setCurrentPlay, setSongs } = useContext(ContextSong);

  const addCurrentPlay = () => {
    setCurrentPlay(song);
  };

  return (
    <div className="card w-[98%] mt-2">
      <Card>
        <div className="flex justify-start items-center gap-3">
          <img src={image} alt="" className="rounded-[.5rem] w-[110px] " />
          <h1 className="font-semibold w-[17rem]">{title}</h1>
          <div className="flex items-center gap-[10.6rem]">
            <h1>{source}</h1>
            <h1>{date}</h1>
            <div className="cursor-pointer" onClick={addCurrentPlay}>
              <FontAwesomeIcon
                icon={faPlayCircle}
                style={{ height: "2em", color: "#F59E0B" }}
              />
            </div>
            <div className="mr-5 cursor-pointer">
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() =>
                  setSongs((songs) => songs.filter((s) => s.id !== id))
                }
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
