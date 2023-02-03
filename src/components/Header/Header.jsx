import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="p-[.5rem] flex w-[77%] justify-between">
        <h1 className="text-[1.3rem] font-semibold">Songs</h1>
        <h1 className="text-[1.3rem] font-semibold">
          <Button
            onClick={() => setVisible(true)}
            label="Add Song"
            className="p-button-warning p-button-sm"
          />
        </h1>
      </div>
      <Dialog
        header="Add Song"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <form action="">
          <label htmlFor="">Song Name</label>
          <InputText type="text" placeholder="Song Name" /> <br />
          <label htmlFor="">Song Link</label>
          <InputText type="text" placeholder="Song Link" />
          <br />
          <label htmlFor="">Song Source</label>
          <InputText type="text" placeholder="Song Source" />
          <br />
        </form>
      </Dialog>
    </>
  );
};
