/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function ListGroup() {
    const cities = ["New York", "Tokyo", "Berlin", "Paris"];
    const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>Popular Cities</h1>
      {cities.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            className = {
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key = {item}
            onClick={() => {setSelectedIndex(index)} }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//8