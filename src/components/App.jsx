import React, { useState } from "react";

function App() {
  const [inputtext, setinputtext] = useState("");
  const [items, setitems] = useState([]);
  function add(event) {
    const newvalue = event.target.value;
    setinputtext(newvalue);
  }
  function additem() {
    setitems(previousitem => {
      return [...previousitem, inputtext];
    });
    setinputtext("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={add} type="text" value={inputtext} />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(function(todoitems) {
            return <li>{todoitems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
