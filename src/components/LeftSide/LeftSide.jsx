import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextSong } from "../../store/store";

export const LeftSide = () => {
  const { setToken, setAuth } = useContext(ContextSong);
  const navigate = useNavigate();

  const handleLogout = () => {
    function deleteCookie(name) {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }

    deleteCookie("token");
    setAuth(false)
    setToken(false)
    navigate("/");
  };

  return (
    <div className="w-[18%] fixed top-0 left-side">
      <div className="flex justify-center mt-5">
        <h1 className="text-[1.5rem] font-semibold">Musique</h1>
      </div>
      <div
        onClick={handleLogout}
        className="bottom-0 fixed mx-[8rem] mb-5 cursor-pointer logout-div"
      >
        <h1>Logout</h1>
      </div>
    </div>
  );
};
