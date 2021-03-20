import React, {Component} from "react";
import new01 from "./new01.png";
import new02 from "./new02.png";
import new03 from "./new03.png";
import new04 from "./new04.png";
import new05 from "./new05.png";
import new06 from "./new06.png";
import new07 from "./new07.png";

class Stuff extends Component {
    render() {
        return(
            <div style={{backgroundColor:"#043970"}}>
                <h2 className="titles">Sales</h2>
 
                <ul className="salesItems">
                    <li><img className="SalesItems" src={new01}/></li>
                    <li><img className="SalesItems" src={new02}/></li>
                    <li><img className="SalesItems" src={new03}/></li>
                    <li><img className="SalesItems" src={new04}/></li>
                    <li><img className="SalesItems" src={new05}/></li>
                    <li><img className="SalesItems" src={new06}/></li>
                    <li><img className="SalesItems" src={new07}/></li>
                </ul>
            </div>
        );
    }
}

export default Stuff;