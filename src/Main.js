import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home"
import Sales from "./Sales"
import logo from "./Logo.png";
import ServiceTools from "./ServiceTools";
import RecentStock from "./recentlyRestocked";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="mainDisplay">
                    <div style={{display:"flex",flexDirection:"row",padding:10}}>
                        <img src={logo}/>
                        <h1 style={{paddingLeft:20, color:"#043970"}}>Mouser Electronics</h1>
                    </div>
                    <ul className="header">
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
                </div>
            </HashRouter>
            
        );
    }
}

export default Main;