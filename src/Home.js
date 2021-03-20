import React, {Component} from "react";
import Marque01 from "./Marque01.png";

class Home extends Component {
    render() {
        return(
            <div id="homeDIV">
                <h2 className="titles">Welcome to Mouser</h2>
                <img src={Marque01} className="homeImg"/>
                <p id="COVIDMSG">
                    Due to COVID-19, we may be 
                    out of stock for the component you may need.
                    Please, check out our "Recently Stocked" page 
                    if we were out of a product you were looking for last time.
                </p>                            
            </div>
        );
    }
}

export default Home;