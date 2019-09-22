import React from 'react';
import './black.css';
import Bot from './bot';
import Main from './main';
const Home = (aux) => {
    return (
        <div>
        <div className="bg"><Main location={"q="+aux.location.state.info} /></div>
       <div className="bgb"> <Bot/></div>
       </div>
    );
} 
export default Home;