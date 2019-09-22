import React from "react";
import "./black.css";
import { Link } from "react-router-dom";
let x = "";
const keyEnter = event => {
  if (event.key === "Enter") {
    x = event.target.value;
    console.log(x);
    localStorage.setItem(localStorage.length + 1, x);
    event.target.value = "";
  }
};
var numbers = [1,2,3,4];
const Search = () => {
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




{numbers.map((temp) => (




<Link
          to={{
            pathname: `/Home/`,
            state: { info: localStorage.getItem(temp) }
          }}
        >
              <div className="box font" key={temp} >{localStorage.getItem(temp)}</div>
        </Link>


  ))}






      </div>
    </div>
  );
};
export default Search;
