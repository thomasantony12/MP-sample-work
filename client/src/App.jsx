import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/list/List.jsx";
import Tabs from "./components/tabs/Tabs.jsx";
import "./layout.scss";


function App() {
  const [taskId, setTaskId] = useState();
  const [todoList, setTodoList] = useState([]);
  const [deleteItems, setDeleteItems] = useState([]);
  const [item, setItem] = useState("");
  const [error, setError] = useState();
  const [tab, setTab] = useState(1);
  const [upOrAdd, setUpOrAdd] = useState(true);
  const [trigger, setTrigger] = useState(0);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setItem(value);
  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        setError();
        const res = await axios.get("http://localhost:3000/");
        if(!res.data[0]){
          setError("No Data Found!");
        }
        if(tab == 1){
          setTodoList(res.data);
        } else if(tab == 2) {
          setTodoList(res.data.filter( item => {
            return item.status != "Completed"
          }));
        } else if(tab == 3) {
          setTodoList(res.data.filter( item => {
            return item.status != "Active"
          }));
        }   
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  },[trigger,tab]);

 

  const addHandler = async () => {
    try {
      await axios.post("http://localhost:3000/newTask", { item });
      setItem("");
    } catch (error) {
      console.log(error);
    }
  };
  const upHandler = async () => {
    try {
      await axios.patch("http://localhost:3000/updateTask", { dId: taskId, task: item});
      setItem("");
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = async (id, task) => {
    try {
      setUpOrAdd(false);
      setItem(task);
      setTaskId(id);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteAllHandler = async () => {
    try {
      await Promise.all(deleteItems.map(async(item) => {
        console.log(item);
        await axios.delete("http://localhost:3000/deleteTask", {data : {dId: item}});
      }))
      console.log(deleteItems);
      setDeleteItems([]);
    } catch (error) {
      console.log(error);
    }
  }

  const activateTrigger =  () => {
    try {
      setTrigger(prev=> prev + 1);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="layout">
      <h1>Todo List</h1>
      <div className="input">
        <form>
          <input
            onChange={onChangeHandler}
            name="task"
            placeholder="Enter new task"
            className="task"
            type="text"
            value={item}
            minLength={4}
            maxLength={45}
          />
          <button onClick={upOrAdd ? addHandler : upHandler}>{upOrAdd ? "Add" : "Update"}</button>
        </form>
      </div>
      <Tabs setTab={setTab} tab={tab} />
      {error ? <p>{error}</p> : 
      <div className="delete">
        <form>
        <button onClick={deleteAllHandler}>
          <img src="../public/delete.png" alt="" />
        </button>
        </form>
      </div>}
      <List data={todoList} setDeleteItems={setDeleteItems} activateTrigger={activateTrigger}  editHandler={editHandler} />
    </div>
  );
}

export default App;
