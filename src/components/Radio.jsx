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
export default function Radio() {
  const [check, setCheck] = useState();
  const handleSubmit = () => {
    console.log({ id: check });
  };
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <input
              checked={check === course.id}
              type="radio"
              onChange={() => setCheck(course.id)}
            />
            {course.name}
          </div>
        );
      })}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
