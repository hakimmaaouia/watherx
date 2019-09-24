import React from "react";
import "./black.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Search = () => {
  const [count, setCount] = useState([]);

  const setstorege = () => {
    localStorage.setItem("0", JSON.stringify(count));
  };

  let x = "";
  const keyEnter = event => {
    if (event.key === "Enter") {
      x = event.target.value;
      setCount([...count, { x }]);
      event.target.value = "";
      setstorege();
    }
  };

  console.log(count);

  return (
    <div className="bgs">
      <div className="container">
        <div className="centre">
          <label className="font">search</label>
          <input
            type="text"
            id="search"
            name="search"
            onKeyPress={keyEnter}
          ></input>
        </div>

        {count.map(temp => (
          <div key={Math.random() * 100} className="box">
            <Link
              to={{
                pathname: `/Home`,
                state: { info: temp.x }
              }}
            >
              <div className="boxs font">{temp.x}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Search;
