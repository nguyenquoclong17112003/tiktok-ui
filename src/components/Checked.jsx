import React, { useState } from "react";

const courses = [
  {
    id: 1,
    name: "React Native",
  },
  {
    id: 2,
    name: "Python",
  },
  {
    id: 3,
    name: "Java",
  },
];
export default function Checked() {
  const [check, setCheck] = useState([]);

  const handleCheck = (id) => {
    setCheck((prev) => {
      const isChecked = check.includes(id);
      if (isChecked) {
        return check.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    console.log({ ids: check });
  };
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(course.id)}
              checked={check.includes(course.id)}
            />
            {course.name}
          </div>
        );
      })}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
