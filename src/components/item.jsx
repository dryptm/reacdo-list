import React, { useState } from "react";

function Item(prop) {
  const [isdone, setisdone] = useState(false);
  function handleclick() {
    setisdone(prevalue => {
      return (prevalue = true);
    });
  }
  return (
    <li
      style={{ textDecoration: isdone ? "line-through" : "none" }}
      onClick={handleclick}
    >
      {prop.text}
    </li>
  );
}
export default Item;
