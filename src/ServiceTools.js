import React, {Component} from "react";
import tool01 from "./tool01.png";
import tool02 from "./tool02.png";
import tool03 from "./tool03.png";
import tool04 from "./tool04.png";
import tool05 from "./tool05.png";


class ServiceTools extends Component {
    
    render() {
        return(
            <div style={{backgroundColor:"#043970"}}>
                <h2 className="titles">Services and Tools</h2>
                <ul className="serviceTools">
                    <li><img src={tool01}/></li>
                    <li><img src={tool02}/></li>
                    <li><img src={tool03}/></li>
                    <li><img src={tool04}/></li>
                    <li><img src={tool05}/></li>
                </ul>
            </div>
        );
    }
}

export default ServiceTools;