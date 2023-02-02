import React from "react";
import { LeftSide } from "../LeftSide/LeftSide";
import { RightSide } from "../RightSide/RightSide";

export const Home = () => {
  return (
    <div className="flex justify-between">
      <LeftSide />
      <div />
      <RightSide />
    </div>
  );
};
