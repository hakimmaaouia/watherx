import React from "react";
import "./black.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = (aux) => {
  var car = [];
  car = JSON.parse(localStorage.getItem("0"));

  const [count, setCount] = useState([]);
  useEffect(() => {
    setCount(car);
  }, []);

  let x = "";
  const keyEnter = event => {
    if (event.key === "Enter") {
      x = event.target.value;
      if (count === null) {
        setCount([x]);
      } else {
        setCount([...count, x]);
      }
      localStorage.setItem("0", JSON.stringify(count));
      event.target.value = "";
    }
  };

  //location 
  const [loc, setloc] = useState("");
useEffect(() => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition)
    }
  }
  

  const  showPosition = (position) => {
  setloc("lat="+position.coords.latitude+"&lon="+position.coords.longitude)
}
  getLocation()
  if (typeof aux.location.state !== "undefined"){
    setloc(aux.location.state.info)
 }
},[aux.location.state]);

  return (
    <div className="bgs">
      <div className="container">
   
      <Link
                  to={{
                    pathname: `/Home`,
                    state: { info: loc , loc}
                  }}
                >
      <div  className="font btn-pos"> My Current Location  <i className="fas fa-map-marker-alt"></i></div>
      </Link>

        <div className="centre">
          <label className="font">search</label>
          <input
            type="text"
            id="search"
            name="search"
            onKeyPress={keyEnter}
          ></input>
        </div>

        {count ? (
          count.map(temp => {
            return (
              <div key={Math.random() * 100} className="box">
                <Link
                  to={{
                    pathname: `/Home`,
                    state: { info: "q="+temp , loc}
                  }}
                >
                  <div className="boxs font">{temp}</div>
                </Link>
              </div>
            );
          })
        ) : (
          <div style={{color:"white",textAlign:"center",marginTop:"50px"}}>Loading...</div>
        )}
      </div>
    </div>
    
  );
};
export default Search;
