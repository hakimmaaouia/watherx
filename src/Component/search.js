import React from 'react';
import './black.css';
import {Link} from 'react-router-dom'
  
const keyEnter = (event) => {
    if (event.key === "Enter") {

        localStorage.setItem(localStorage.length+1, "ezzahra");
    }
  }

 const Search = () => {
console.log(localStorage.length);

     return (
     <div className="bgs">
         <div className="container">
             <div className="centre">
         <label  className="font">search</label>
         <input type="text" id="search" name="search"   onKeyPress={keyEnter}></input>
         </div>

  
     <Link to={{pathname:`/`,state:{info:"tunis"}}}>
         <div className="box font">
    {localStorage.getItem("1")}
         </div>
         </Link>
         
    
         
</div>
     </div>)
 }
export default Search;