import React, {Component} from "react";
import new01 from "./img/new01.png";
import new02 from "./img/new02.png";
import new03 from "./img/new03.png";
import new04 from "./img/new04.png";
import new05 from "./img/new05.png";
import new06 from "./img/new06.png";
import new07 from "./img/new07.png";

class Stuff extends Component {
    render() {
        return(
            <div style={{backgroundColor:"#043970",borderRadius:5}}>
                <h2 className="titles">Sales</h2>
 
                <ul className="salesItems">
                    <img className="SalesItems" src={new01}/>
                    <img className="SalesItems" src={new02}/>
                    <img className="SalesItems" src={new03}/>
                    <img className="SalesItems" src={new04}/>
                    <img className="SalesItems" src={new05}/>
                    <img className="SalesItems" src={new06}/>
                    <img className="SalesItems" src={new07}/>
                </ul>
            </div>
        );
    }
}

export default Stuff;