(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},40:function(e,a,t){e.exports=t(82)},81:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(19),o=t.n(s),r=t(8),l=t(9),i=t(11),m=t(10),d=t(12),u=(t(16),t(36)),f=t.n(u),p=t(20),h=t.n(p),v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={tamps:[]},t.time=function(e){return new Date(1e3*e).toUTCString().slice(-12,-7)},t.icon=function(e,a){var t=" ";switch(e){case"clear sky":t="fas fa-sun";break;case"few clouds":t="fas fa-cloud-sun";break;case"scattered clouds":case"broken clouds":t="fas fa-cloud";break;case"shower rain":t="fas fa-cloud-showers-heavy";break;case"rain":t="fas fa-cloud-sun-rain";break;case"thunderstorm":t="fas fa-cloud-meatball";break;case"snow":t="far fa-snowflake";break;case"mist":t="fas fa-smog";break;default:t="iundefined"}return t+" "+a+" color"},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://openweathermap.org/data/2.5/forecast/hourly?"+this.props.location+"&appid=b6907d289e10d714a6e88b30761fae22";console.log(a),h.a.get(a).then(function(a){e.setState({tamps:a.data.list})})}},{key:"render",value:function(){var e=this;return c.a.createElement(f.a,{infinite:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,responsive:[{breakpoint:100,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:50,settings:{arrows:!1,centerMode:!0,centerPadding:"60px",slidesToShow:0}}]},this.state.tamps.slice(0,8).map(function(a){return c.a.createElement("div",{key:a.dt},c.a.createElement("div",{className:"sb"},c.a.createElement("div",{className:"centre col"},c.a.createElement("div",{className:"fontmini  "},a.dt_txt.slice(0,10)),c.a.createElement("div",{className:"fontmini  "},e.time(a.dt)),c.a.createElement("div",{className:"font  margin10 "},Math.trunc(a.main.temp)+"\xb0C"),c.a.createElement("div",null,c.a.createElement("hr",null)),c.a.createElement("div",{className:" margin10 "},c.a.createElement("i",{className:e.icon(a.weather[0].description,"fa-2x")})),c.a.createElement("div",{className:"row"}))))}))}}]),a}(c.a.Component),E=t(7),b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t.time=function(e){return new Date(1e3*e).toUTCString().slice(-12,-7)},t.nord=function(e){return 1===e?"Today":"Tonightaaaa"},t.icon=function(e,a){var t=" ";switch(e){case"clear sky":t="fas fa-sun";break;case"few clouds":t="fas fa-cloud-sun";break;case"scattered clouds":case"broken clouds":t="fas fa-cloud";break;case"shower rain":t="fas fa-cloud-showers-heavy";break;case"rain":t="fas fa-cloud-sun-rain";break;case"thunderstorm":t="fas fa-cloud-meatball";break;case"snow":t="far fa-snowflake";break;case"mist":t="fas fa-smog";break;default:t="iundefined"}return t+" "+a+" color"},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://openweathermap.org/data/2.5/weather?"+this.props.location+"&appid=b6907d289e10d714a6e88b30761fae22";console.log(a),h.a.get(a).then(function(a){e.setState({name:a.data.name,temp:a.data.main.temp,sunset:a.data.sys.sunset,wind:a.data.wind.speed,type:a.data.sys.type,icon:a.data.weather[0].description})})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(E.b,{to:{pathname:"/",state:{info:this.props.loc}}},"search")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"centre col"},c.a.createElement("p",{className:"font"},this.state.name," ",c.a.createElement("i",{className:"far fa-building"})),c.a.createElement("p",{className:"fontmini"},this.nord(this.state.type)))),c.a.createElement("div",{className:"centre margin15"},c.a.createElement("i",{className:this.icon(this.state.icon,"fa-10x")})),c.a.createElement("div",{className:"row centre  ",style:{marginTop:"3%"}},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"col centre"},c.a.createElement("span",{className:"fontmini"}," sunset")),c.a.createElement("div",{className:"col center"},c.a.createElement("span",{className:"font"},this.time(this.state.sunset)))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"col centre"},c.a.createElement("span",{className:"fontmini"},"Avg temp")),c.a.createElement("div",{className:"col center"},c.a.createElement("span",{className:"font"},Math.trunc(this.state.temp)+"\xb0C"))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"col centre"},c.a.createElement("span",{className:"fontmini"}," Wind")),c.a.createElement("div",{className:"col center"},c.a.createElement("span",{className:"font"}," ",this.state.wind)))))}}]),a}(c.a.Component),w=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"bg"},c.a.createElement(b,{location:e.location.state.info,loc:e.location.state.loc})),c.a.createElement("div",{className:"bgb"}," ",c.a.createElement(v,{location:"q="+e.location.state.info})))},g=t(39),N=t(24),k=function(e){var a;a=JSON.parse(localStorage.getItem("0"));var t=Object(n.useState)([]),s=Object(N.a)(t,2),o=s[0],r=s[1];Object(n.useEffect)(function(){r(a)},[]);var l="",i=Object(n.useState)(""),m=Object(N.a)(i,2),d=m[0],u=m[1];return Object(n.useEffect)(function(){var a=function(e){u("lat="+e.coords.latitude+"&lon="+e.coords.longitude)};navigator.geolocation&&navigator.geolocation.watchPosition(a),"undefined"!==typeof e.location.state&&u(e.location.state.info)},[e.location.state]),c.a.createElement("div",{className:"bgs"},c.a.createElement("div",{className:"container"},c.a.createElement(E.b,{to:{pathname:"/Home",state:{info:d,loc:d}}},c.a.createElement("div",{className:"font btn-pos"}," My Current Location  ",c.a.createElement("i",{className:"fas fa-map-marker-alt"}))),c.a.createElement("div",{className:"centre"},c.a.createElement("label",{className:"font"},"search"),c.a.createElement("input",{type:"text",id:"search",name:"search",onKeyPress:function(e){"Enter"===e.key&&(l=e.target.value,r(null===o?[l]:[].concat(Object(g.a)(o),[l])),localStorage.setItem("0",JSON.stringify(o)),e.target.value="")}})),o?o.map(function(e){return c.a.createElement("div",{key:100*Math.random(),className:"box"},c.a.createElement(E.b,{to:{pathname:"/Home",state:{info:"q="+e,loc:d}}},c.a.createElement("div",{className:"boxs font"},e)))}):c.a.createElement("div",{style:{color:"white",textAlign:"center",marginTop:"50px"}},"Loading...")))},y=t(6),O=(t(81),function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement(E.a,null,c.a.createElement(y.a,{path:"/",exact:!0,component:k}),c.a.createElement(y.a,{path:"/Home",component:w})))}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.be64364d.chunk.js.map