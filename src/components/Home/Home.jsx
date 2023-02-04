import React from "react";
import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";
import "./Home.css"

export const Home = () => {
  return (
    <div className="flex justify-between home-page">
      <LeftSide />
      <div />
      <RightSide />
    </div>
  );
};
