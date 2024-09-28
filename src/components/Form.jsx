import React, { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ name, email });
  };

  return (
    <>
      <input
        style={{ display: "block ", marginBottom: "15px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
    </>
  );
}
