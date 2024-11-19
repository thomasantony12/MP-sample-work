import { useState } from "react";
import List from "./components/list/List.jsx";
import Tabs from "./components/tabs/Tabs.jsx";
import "./layout.scss";
import { todoList } from "./lib/sampledata.js";

function App() {
  const [item, setItem] = useState("");
  const [tab, setTab] = useState(1);
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setItem(value);
  };

  const clickHandler = () => {
    setItem("");
  };

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
      <Tabs setTab={setTab} tab={tab} />
      <div className="delete">
      <button><img src="../public/delete.png" alt="" /></button>
      </div>
      <List data={todoList} />
    </div>
  );
}

export default App;
