import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useContext, useState } from "react";
import { ContextSong } from "../../store/store";

export const Header = () => {
  const { songs, setSongs } = useContext(ContextSong);

  const [visible, setVisible] = useState(false);
  const [songUrl, setSongUrl] = useState("");
  const [source, setSource] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [blob, setBlob] = useState("");

  const changeThumb = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    setBlob(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const newSong = {
        id: songs.length + 1,
        title: title,
        image: blob,
        source: source,
        date: new Date().toLocaleDateString(),
        fileUrl: songUrl,
      };

      setSongs([newSong, ...songs]);
      setVisible(false);
      setBlob("");
      setFile("");
      setSongUrl("");
      setTitle("");
      setSource("");
    }
  };
  console.log(songs);
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
          <br />
          <InputText
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="p-inputtext-sm w-[100%] mb-2 mt-1"
            placeholder="Song Name"
          />
          <br />
          <label htmlFor="">Song Link</label>
          <br />
          <InputText
            onChange={(e) => setSongUrl(e.target.value)}
            type="text"
            className="p-inputtext-sm w-[100%] mb-2 mt-1"
            placeholder="URL"
          />
          <br />
          <label htmlFor="">Song Source</label>
          <br />
          <InputText
            onChange={(e) => setSource(e.target.value)}
            type="text"
            className="p-inputtext-sm w-[100%] mb-2 mt-1"
            placeholder="Song Source"
          />
          <input type="file" name="" id="" onChange={changeThumb} />
          {blob && <img src={blob} height="60" width="60" alt="" />}
          <p>
            Image has to be of ratio 1:1 with size of 3000 pixels and 3000
            pixels
          </p>
          <div className="flex justify-end">
            <Button label="Submit" aria-label="Submit" onClick={handleSubmit} />
          </div>
        </form>
      </Dialog>
    </>
  );
};
