import React, {Component} from "react";
import tool01 from "./img/tool01.png";
import tool02 from "./img/tool02.png";
import tool03 from "./img/tool03.png";
import tool04 from "./img/tool04.png";
import tool05 from "./img/tool05.png";
import "./ContentStyle.css"


class ServiceTools extends Component {
    
    render() {
        return(
            <div className="content">
                <h2 className="title">Services and Tools</h2>
                <ul className="serviceTools itemList">
                    <img className="serviceTools itemInList" src={tool01}/>
                    <img className="serviceTools itemInList" src={tool02}/>
                    <img className="serviceTools itemInList" src={tool03}/>
                    <img className="serviceTools itemInList" src={tool04}/>
                    <img className="serviceTools itemInList" src={tool05}/>
                </ul>
            </div>
        );
    }
}

export default ServiceTools;