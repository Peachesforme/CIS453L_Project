import React, {Component} from "react";
import stock01 from "./img/stock01.png";
import stock02 from "./img/stock02.png";
import stock03 from "./img/stock03.png";
import stock04 from "./img/stock04.png";
import "./ContentStyle.css";


class RecentStock extends Component {
    
    render() {
        return(
            <div className="content">
                <h2 className="title">Recently Restocked</h2>
                <ul className="recentRestock itemList">
                    <img className="recentRestock itemInList" src={stock01}/>
                    <img className="recentRestock itemInList" src={stock02}/>
                    <img className="recentRestock itemInList" src={stock03}/>
                    <img className="recentRestock itemInList" src={stock04}/>
                </ul>
            </div>
        );
    }
}

export default RecentStock;