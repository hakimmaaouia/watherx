import React, { useState, useEffect } from 'react';
import './black.css';
import Bot from './bot';
import Main from './main';

/* git */

/* geo*/

const Home = (aux) => {

  const [lat,setlat] = useState(null);
  const [long, setlong] = useState(null);
 /* geo*/


  
 useEffect(() => { 

    const showPosition = (position) => {    
      setlat(position.coords.latitude);
      setlong(position.coords.longitude); 
    }
     
    const  getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
   
        
        
      } else { 
        console.log("false");
        
      }
      
    }
    getLocation();
  }, []);
  
/* geo*/
  /*loc*/
const loc = (aux) => {
  var r = ""   
  if (typeof aux.location.state === 'undefined') {   
      r="lat="+lat+"&lon="+long;
      
  }else
  {
      r="q="+aux.location.state.info
  }
  return r;
}
let r = "";
if(lat >0 && long >0 ){
 r = loc(aux)
}

/*loc*/
console.log(r);

    return (
        <div>
        <div className="bg"><Main location={r}/></div>
       <div className="bgb"> <Bot/></div>
       </div>
    );
} 
export default Home;