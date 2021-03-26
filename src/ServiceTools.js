import React, {Component} from "react";
import tool01 from "./img/tool01.png";
import tool02 from "./img/tool02.png";
import tool03 from "./img/tool03.png";
import tool04 from "./img/tool04.png";
import tool05 from "./img/tool05.png";


class ServiceTools extends Component {
    
    render() {
        return(
            <div style={{backgroundColor:"#043970",borderRadius:5}}>
                <h2 className="titles">Services and Tools</h2>
                <ul className="serviceTools">
                    <img className="STItem" src={tool01}/>
                    <img className="STItem" src={tool02}/>
                    <img className="STItem" src={tool03}/>
                    <img className="STItem" src={tool04}/>
                    <img className="STItem" src={tool05}/>
                </ul>
            </div>
        );
    }
}

export default ServiceTools;