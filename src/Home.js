import React, {Component} from "react";
import Marque01 from "./Marque01.png";

class Home extends Component {
    render() {
        return(
            <div>
                <h2>Welcome to Mouser</h2>
                <img src={Marque01} style={{alignSelf:"center"}}/>
                <p style={{width:"50%", backgroundColor:"lightGrey",fontSize: "2em", display:"block", borderStyle:"solid"}}>
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