import React, {Component} from "react";
import Marque01 from "./img/Marque01.png";
import Sales from './Sales';
import RecentlyRestocked from './recentlyRestocked'
import ServiceTools from './ServiceTools'

class Home extends Component {
    render() {
        return(
            <div id="homeDIV">
                <h2 className="titles" 
                style={{fontSize: 48, 
                        color: "#0070BB", 
                        paddingLeft:20}}>
                    Welcome to Mouser Electronics
                </h2>
                <img src={Marque01} className="homeImg"/>
                <br></br>
                <p id="COVIDMSG">
                    Due to COVID-19, we may be 
                    out of stock for the component you may need.
                    Please, check out our "Recently Stocked" page 
                    if we were out of a product you were looking for last time.
                </p> 
            <div>
                <br></br>
            </div>
                <Sales />
                <br></br>
                <ServiceTools />
                <br></br>
                <RecentlyRestocked />                           
            </div>
        );
    }
}

export default Home;