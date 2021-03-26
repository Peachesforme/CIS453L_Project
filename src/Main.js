import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home"
import Sales from "./Sales"
import logo from "./img/Logo.png";
import ServiceTools from "./ServiceTools";
import RecentStock from "./recentlyRestocked";
import FooterImg from './img/Footer.png';
import "./Main.css"

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="mainDisplay">
                    <div  className="Banner">
                        <img src={logo}/>
                        <h1 style={{paddingLeft:20, color:"#043970"}}>
                            Mouser Electronics
                        </h1>
                        <div className='ContactInfo'>
                            <h3>Contact Info</h3>
                            <p style={{fontSize:'.8rem'}}>(USA)</p>
                            <p>(800)346-6873</p>
                        </div>
                    </div> 
                    <ul className="navBar">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/sales">Sales</NavLink></li>
                        <li><NavLink to="/serviceTools">Services & Tools</NavLink></li>
                        <li><NavLink to="/recentlyRestocked">Recently Stocked</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/sales" component={Sales}/>
                        <Route path="/serviceTools" component={ServiceTools}/>
                        <Route path="/recentlyRestocked" component={RecentStock}/>
                    </div>
                    <img id="footerID" src={FooterImg}></img>
                </div>
            </HashRouter> 
        );
    }
}

export default Main;