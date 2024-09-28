import React from "react";
import { useState, useEffect } from "react";

export default function Avatar() {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    // cleanup func
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);

    e.target.value = null;
  };

  return (
    <>
      <input type="file" onChange={handleAvatar} />
      {avatar && <img src={avatar.preview} alt="" />}
    </>
  );
}
