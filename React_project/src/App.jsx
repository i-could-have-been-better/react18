import React, { useState } from "react";

export default function App() {
  console.log("组件刷新啦");

  const [user, setUser] = useState({ name: "孙悟空" });
  const [count, setCount] = useState(1);

  const changeUserHandler = () => {
    setUser((pre) => ({ ...pre, name: "猪八戒" }));
  };

  const addCountHandler = () => {
    setTimeout(() => {
      setCount((pre) => pre + 1);
    }, 1000);
    // setCount((pre) => pre + 1);
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{count}</h1>
      <button onClick={changeUserHandler}>修改</button>
      <button onClick={addCountHandler}>+1</button>
    </div>
  );
}
