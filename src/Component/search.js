import React from 'react';
import './black.css';
import {Link} from 'react-router-dom'
let x = "";
const keyEnter = (event) => {
    
    if (event.key === "Enter") {
       x=event.target.value;
      localStorage.setItem(localStorage.length+1, x);
      event.target.value=""
    }
  }

  

  
 const Search = () => {
     return (
     <div className="bgs">
         <div className="container">
             <div className="centre">
         <label  className="font">search</label>
         <input type="text" id="search" name="search"   onKeyPress={keyEnter}></input>
         </div>

     <Link to={{pathname:`/Home/`,state:{info:localStorage.getItem("1")}}}>
         <div className="box font">
    {localStorage.getItem("1")}
         </div>
         </Link>
         
    
         
</div>
     </div>)
 }
export default Search;