import React from 'react';
import './black.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Main extends React.Component {
/*GET */
state={  
}
url = (loc) => {
    
    var r="https://openweathermap.org/data/2.5/weather?"+loc+"&appid=b6907d289e10d714a6e88b30761fae22"
return r
}


componentDidMount() {


    axios.get(this.url(this.props.location))
   .then(res => {
    
       this.setState({
          name : res.data.name,
          temp:  res.data.main.temp,
          sunset: res.data.sys.sunset,
          wind:res.data.wind.speed,
          type :res.data.sys.type,
          icon :res.data.weather[0].description
           
       })
   })
  
}

/*GET*/


/*time*/
time = (val) => {
    var dateObj = new Date(val * 1000); 
    var utcString = dateObj.toUTCString(); 
    var r = utcString.slice(-12, -7); 
   
  return r ;
  };
  

/*time*/
/*NORD */

nord = (val) => {
    var r="";
 if (val === 1) {
     r="Today";
 } 
 else {
    r="Tonightaaaa";
     
 }
 return r ;
}

/*NORD*/

/*image*/
icon = (id,size) => {
    var nc=" ";
  
    switch (id) {
        case "clear sky":
          nc = "fas fa-sun";
          break;
        case "few clouds":
          nc = "fas fa-cloud-sun";
          break;
        case "scattered clouds":
          nc = "fas fa-cloud";
          break;
           case "broken clouds":
          nc = "fas fa-cloud";
          break;
         case "shower rain":
          nc = "fas fa-cloud-showers-heavy";
          break;
          case "rain":
          nc = "fas fa-cloud-sun-rain";
          break;
          case "thunderstorm":
            nc = "fas fa-cloud-meatball";
            break;             
          case "snow":
            nc = "far fa-snowflake";
            break;
            case "mist":
                nc = "fas fa-smog";
                break;
      
  
  

          default:
            nc= "iundefined";
      }

   var r=nc+" "+size+" color";
  return r ;
}
/*icon */
    render() { 
        return ( 
            <div>

            <div>

              <div className="centre " >
                
               <p className="font">{this.state.name} <i className="far fa-building"></i></p>
                   </div>
                  <div className="centre" >
                  <p className="fontmini">{this.nord(this.state.type)}</p>  
                  </div>
                  
               
                  <Link to="/Search/">search</Link>

            </div>





            <div className="centre margin15">
            <i className={this.icon(this.state.icon,"fa-10x")}></i>
                </div>





<div className="row centre  "> 
        <div className="col">
            <div className="col centre">
               <span className="fontmini"> sunset</span>
                </div>
                <div className="col center">

                <span className="font">{this.time(this.state.sunset)}</span>
                    </div>

            </div>


            <div className="col">
            <div className="col centre">
               <span className="fontmini">Avg temp</span>
                </div>
                <div className="col center">

                <span className="font">{Math.trunc(this.state.temp)+"°C"}</span>
                    </div>

            </div>


        

            <div className="col">
            <div className="col centre">
               <span className="fontmini"> Wind</span>
                </div>
                <div className="col center">

                <span className="font"> {this.state.wind}</span>
                    </div>

            </div>
</div>
            








            </div>

         );
    }
}
 
export default Main;