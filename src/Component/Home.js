import React, { useState, useEffect } from 'react';
import './black.css';
import Bot from './bot';
import Main from './main';


/* geo*/

const Home = (aux) => {

  const [lat,setlat] = useState(0);
  const [long, setlong] = useState(0);
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
/*loc*/
console.log(loc(aux));

    return (
        
  
        <div>
        <div className="bg"><Main location={loc(aux)}/></div>
       <div className="bgb"> <Bot/></div>
       </div>
    );
} 
export default Home;