import React, {Component} from "react";
import "./Main.css";
import NavBar from "./NavBar"

class Main extends Component {
    render() {
        return (
            <div>
                <div className="Banner">
                            <h1 className="CompanyName">Mouser Electronics</h1>
                            <div className="searchContainer">
                                <input type="search" id="search" placeholder="Product ID#/Name"/>
                                <button id="searchButton">Search</button>
                            </div>
                            <div className='ContactInfo'>
                                <h3>Contact Info</h3>
                                <p>(USA)</p>
                                <p>(800) 346-6873</p>
                            </div>
                </div>
                <NavBar/>
            </div>
        );
    }
}

export default Main;