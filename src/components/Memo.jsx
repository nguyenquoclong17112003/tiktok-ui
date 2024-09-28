import { React, memo } from "react";
// ! Memo lets bỏ qua việc re-rendering components when its props are unchanged
// ? Khi props components cha thay đổi có liên quan đến component con thì lúc đó component con sẽ được re-rendering components
// TODO Giúp tránh việc re-rendering components con không cần thiết

// * useCallback cho phép lưu giá trị tham chiếu của hàm để components con không cần thiết phải re-rendering component
// ! Lưu ý chỉ sử dụng useCallback khi component con sử dụng memo

export default memo(function Memo({ count, onIncrease }) {
  console.log("render");
  return (
    <div>
      Memo {count}
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
});
