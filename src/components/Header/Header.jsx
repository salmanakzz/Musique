import { Button } from "primereact/button";
import React from "react";

export const Header = () => {
  return (
    <div className="p-[.5rem] flex w-[77%] justify-between">
      <h1 className="text-[1.3rem] font-semibold">Songs</h1>
      <h1 className="text-[1.3rem] font-semibold"><Button label="Add Song" className="p-button-warning p-button-sm" /></h1>
    </div>
  );
};
