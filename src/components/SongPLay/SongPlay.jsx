import {
  faPlayCircle,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "primereact/card";
import React, { useContext } from "react";
import { ContextSong } from "../../store/store";

export const SongPlay = () => {
  const { currentPlay } = useContext(ContextSong);

  return (
    <div className={currentPlay ? "fixed bottom-0 w-[78%]" : "fixed bottom-0"}>
      <Card style={{ background: "#F59E0B", color: "#000" }}>
        <div className="flex justify-start items-center gap-3">
          {currentPlay ? (
            <>
              <img
                src={currentPlay?.image}
                alt=""
                className="rounded-[.5rem] w-[110px] "
              />
              <h1 className="font-semibold w-[17rem]">{currentPlay?.title}</h1>
              <div className="flex items-center gap-[13.6rem]">
                <h1>{currentPlay?.source}</h1>
                <h1>{currentPlay?.date}</h1>
                <div className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faBackwardStep}
                    style={{ height: "2em", color: "#000" }}
                  />
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    style={{ height: "2em", color: "#000" }}
                  />
                  <FontAwesomeIcon
                    icon={faForwardStep}
                    style={{ height: "2em", color: "#000" }}
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
