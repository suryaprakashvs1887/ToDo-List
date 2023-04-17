import "./styles.css";
import { useState } from "react";
import image from "./front.jpg";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "wakeup",
      date: "06/03/2023,6:00:00"
    },
    {
      text: "Bath",
      date: "06/03/2023,8:00:00"
    }
  ]);

  const [value, setValue] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    const newtodos = [
      ...todos,
      { text: value, date: new Date().toLocaleString() }
    ];
    setTodos(newtodos);

    setValue("");
  }
  function removeItem(e) {
    var index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
  return (
    <>
      <center>
      <img src={image} alt="pizza"></img>
      <br/>
        <input
          type="text"
          className="input"
          placeholder="ADD Item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        {todos.map((item, i) => (
          <div className="todo" key={i} id={i} onClick={removeItem}>
            {item.text}-{item.date}
            <button onClick={removeItem} key={i} id={i}>
              X
            </button>
          </div>
        ))}
      </center>
    </>
  );
}
