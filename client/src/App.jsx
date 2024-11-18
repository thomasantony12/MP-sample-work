import { useState } from "react";
import List from "./components/List/List";
import "./layout.scss";
import { todoList } from "./lib/sampledata.js";

function App() {
  const [item, setItem] = useState("");
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setItem(value);
  };

  const clickHandler = () => {};

  return (
    <div className="layout">
      <h1>Todo List</h1>
      <div className="input">
        <input
          onChange={onChangeHandler}
          name="task"
          placeholder="Enter new task"
          className="task"
          type="text"
          value={item}
        />
        <button onClick={clickHandler}>Add</button>
      </div>
      <List data={todoList} />
    </div>
  );
}

export default App;
