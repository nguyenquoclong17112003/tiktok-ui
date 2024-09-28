import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const jsonLocal = JSON.parse(localStorage.getItem("todoList")) ?? [];

    return jsonLocal;
  });
  const handleClick = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setJobs((prev) => {
      const itemLocal = [...prev, job];
      localStorage.setItem("todoList", JSON.stringify(itemLocal));
      return itemLocal;
    });
    setJob("");
  };

  return (
    <div style={{ padding: "32px" }}>
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        onKeyUp={handleClick}
      />
      <button onClick={handleSubmit}>SUBMIT</button>
      <ul>
        {jobs.map((job, index) => {
          return <li key={index}>{job}</li>;
        })}
      </ul>
    </div>
  );
}
