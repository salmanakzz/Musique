import React, { useContext } from "react";
import { Card } from "primereact/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ContextSong } from "../../store/store";

export const SongCard = ({ song }) => {
  const { id, title, image, source, date } = song;

  const { setCurrentSong, setSongs } = useContext(ContextSong);

  const addCurrentPlay = () => {
    setCurrentSong(song);
  };

  return (
    <div className="card w-[98%] mt-2">
      <Card>
        <div className="flex justify-start items-center gap-3">
          <img src={image} alt="" className="rounded-[.5rem] w-[110px] " />
          <h1 className="font-semibold w-[17rem] song-title">{title}</h1>
          <div className="flex items-center gap-[10.6rem] heading-items">
            <h1 className="w-[59px]">{source}</h1>
            <h1 className="w-[59px]">{date}</h1>
          </div>
          <div className="flex items-center gap-[10.6rem] ml-[10.6rem] control-icons">
            <div className="cursor-pointer" onClick={addCurrentPlay}>
              <FontAwesomeIcon
                icon={faPlayCircle}
                style={{ height: "2em", color: "#F59E0B" }}
              />
            </div>
            <div className="mr-5 cursor-pointer delete-icon">
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
