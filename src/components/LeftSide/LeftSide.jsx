import React from "react";
import { useNavigate } from "react-router-dom";

export const LeftSide = () => {
    const navigate = useNavigate();
  return (
    <div className="w-[18%] fixed top-0">
      <div className="flex justify-center mt-5">
        <h1 className="text-[1.5rem] font-semibold">Musique</h1>
      </div>
      <div onClick={()=> navigate("/")} className="bottom-0 fixed mx-[8rem] mb-5 cursor-pointer">
        <h1>Logout</h1>
      </div>
    </div>
  );
};