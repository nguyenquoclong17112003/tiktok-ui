import { React, useEffect, useState, useRef, forwardRef } from "react";
import MyInput from "./MyInput";
// ! useRef giá trị của nó luôn luôn được giữ lại giữa những lần khi một components được render
// ? Việc thay đổi giá trị của một Ref nó sẽ không ra việc render ra một components khác với useState
// * Những biến cần render ra UI thì chúng ta cần sử dụng useState ngược lại thì sử dụng useRef nó sẽ không gây ra việc render ra component
// TODO Lưu các giá trị tham chiếu bên ngoài function component

export default function UseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    // const timeId = setInterval(() => {
    //   //   countRef.current += 1;
    //   console.log(countRef.current);
    // }, 3000);
    // return () => {
    //   clearInterval(timeId);2
    // };
  }, []);
  return (
    <div>
      <MyInput ref={inputRef} />
    </div>
  );
}
