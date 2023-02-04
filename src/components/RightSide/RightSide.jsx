import React from "react";
import { Body } from "../Body/Body";
import { Header } from "../Header/Header";
import { SongHeader } from "../SongHeader/SongHeader";
import { SongPlay } from "../SongPLay/SongPlay";

export const RightSide = () => {
  return (
    <div className="w-[80%] right-side" style={{ borderLeft: "1px solid #0000001f" }}>
      <div className="ml-3">
        <div className="fixed w-[100%] z-1 bg-white top-0">
          <Header />
          <SongHeader />
        </div>
        <Body />
        <SongPlay />
      </div>
    </div>
  );
};
