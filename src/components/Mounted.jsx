import React, { useState, useEffect } from "react";
// ! Mounted && Unmounted
//* useEffect
//? vấn đề chung useEffect sẽ được chạy khi Component được mounted, Cleanup Function luôn được gọi trước khi Component unmounted
//TODO Trường hợp 1: sử dụng useEffect khi không có đối số thứ 2 thì usedEffect sẽ chạy khi Component được render value và Component được mounted
//TODO Trường hợp 2: sử dụng useEffect khi có đối số thứ 2 là một  [] thì usedEffect sẽ chạy khi Component được mounted
//TODO Trường hợp 3: sử dụng useEffect khi có đối số thứ 2 là một Dependencies thì usedEffect sẽ chạy lại khi state trong Dependencies thay đổi

// ? Sử dụng useLayoutEffect khi cần check một state trong một usedEffect và set lại chính nó

// ?Khi một components được render ra DOM thì gọi là mounted và ngược lại nếu bị gỡ ra DOM thì gọi là Unmounted
const tabs = ["posts", "comments", "albums"];
const courses = [
  {
    id: 1,
    name: "Tự học React",
  },
  {
    id: 2,
    name: "Tự học JavaScript",
  },
  {
    id: 3,
    name: "Tự học Pythons",
  },
];

export default function Mounted() {
  const [item, setIem] = useState("");
  const [posts, setPosts] = useState([]);
  const [types, setTypes] = useState("posts");
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(10);
  const [lesson, setLesson] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [types]);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lesson}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lesson}`, handleComment);
    };
  }, [lesson]);

  useEffect(() => {
    const handleClick = () => {
      setShow(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleClick);

    return () => {
      window.removeEventListener("scroll", handleClick);
    };
  }, []);

  useEffect(() => {
    const timeID = setInterval(() => {
      setTime((prev) => {
        if (prev < 1) {
          clearInterval(timeID);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timeID);
    };
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{time}</h2>
      {tabs.map((tab) => {
        return (
          <button
            style={types === tab ? { color: "yellow", background: "#333" } : {}}
            key={tab}
            onClick={() => setTypes(tab)}
          >
            {tab}
          </button>
        );
      })}
      <input value={item} onChange={(e) => setIem(e.target.value)} />

      <ul>
        {posts.map((post) => {
          return <li key={post.id}> {post.title || post.name} </li>;
        })}
      </ul>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ position: "fixed", right: 20, bottom: 20 }}
        >
          TOP
        </button>
      )}
      <ul>
        {courses.map((course) => {
          return (
            <li
              key={course.id}
              style={
                lesson === course.id
                  ? { color: "green", cursor: "pointer" }
                  : {}
              }
              onClick={() => setLesson(course.id)}
            >
              {course.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
