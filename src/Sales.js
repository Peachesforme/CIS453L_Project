import React, {Component} from "react";
import new01 from "./img/new01.png";
import new02 from "./img/new02.png";
import new03 from "./img/new03.png";
import new04 from "./img/new04.png";
import new05 from "./img/new05.png";
import new06 from "./img/new06.png";
import new07 from "./img/new07.png";
import "./ContentStyle.css"

class Sales extends Component {
    render() {
        return(
            <div className="content">
                <h2 className="title">Sales</h2>
 
                <ul className="Sales itemList">
                    <img className="Sales itemInList" src={new01}/>
                    <img className="Sales itemInList" src={new02}/>
                    <img className="Sales itemInList" src={new03}/>
                    <img className="Sales itemInList" src={new04}/>
                    <img className="Sales itemInList" src={new05}/>
                    <img className="Sales itemInList" src={new06}/>
                    <img className="Sales itemInList" src={new07}/>
                </ul>
            </div>
        );
    }
}

export default Sales;