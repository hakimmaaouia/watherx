import React from "react";
import "./black.css";
import Slider from "react-slick";
import axios from "axios";

class Bot extends React.Component {
  state = {
    tamps: []
  };
  componentDidMount() {
    axios
      .get(
        "https://openweathermap.org/data/2.5/forecast/hourly?id=2464470&appid=b6907d289e10d714a6e88b30761fae22"
      )
      .then(res => {
        this.setState({
          tamps: res.data.list
        });
      });
  }
  /*time*/
  time = val => {
    console.log();

    var dateObj = new Date(val * 1000);
    var utcString = dateObj.toUTCString();
    var r = utcString.slice(-12, -7);

    return r;
  };

  /*time*/
  /*image*/
  icon = (id, size) => {
    var nc = " ";

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
        nc = "iundefined";
    }

    var r = nc + " " + size + " color";
    return r;
  };
  /*icon */
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 100,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3
          }
        },
        {
          breakpoint: 50,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 0
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        {this.state.tamps.slice(0, 8).map(temp => (
          <div key={temp.dt}>
            <div className="sb">
              <div className="centre col">
                <div className="fontmini  ">{temp.dt_txt.slice(0, 10)}</div>
                <div className="fontmini  ">{this.time(temp.dt)}</div>

                <div className="font  margin10 ">
                  {Math.trunc(temp.main.temp) + "°C"}
                </div>

                <div>
                  <hr></hr>
                </div>
                <div className=" margin10 ">
                  <i
                    className={this.icon(temp.weather[0].description, "fa-2x")}
                  ></i>
                </div>
                <div className="row"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default Bot;
