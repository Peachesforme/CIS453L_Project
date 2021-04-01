import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home"
import Sales from "./Sales"
import ServiceTools from "./ServiceTools";
import RecentStock from "./recentlyRestocked";
import FooterImg from './img/Footer.png';
import "./NavBar.css";

class NavBar extends Component {
    
    render() {
        return(
            <HashRouter>
                <div className="navBar">
                    <ul className="navBarul">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/sales">Sales</NavLink>
                        <NavLink to="/serviceTools">Services & Tools</NavLink>
                        <NavLink to="/recentlyRestocked">Recently Stocked</NavLink>
                    </ul>
                </div>
                    <div className="Content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/sales" component={Sales}/>
                        <Route path="/serviceTools" component={ServiceTools}/>
                        <Route path="/recentlyRestocked" component={RecentStock}/>
                    
                    
                </div>
                <img id="footerID" src={FooterImg}></img>
            </HashRouter> 
        );
    }
}

export default NavBar;