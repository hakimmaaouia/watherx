import React from 'react';
import './black.css';
import {Link} from 'react-router-dom'


 const Search = () => {
  
      
     return (<div className="bgs">
         <div className="container">
             <div className="centre">
         <label  className="font">search</label>
         <input type="text" id="search" name="search" ></input>
         </div>

  
     <Link to={{pathname:`/`,state:{info:"tunis"}}}>
         <div className="box font">
          tunis
         </div>
         </Link>
         
    
         
</div>
     </div>)
 }
export default Search;