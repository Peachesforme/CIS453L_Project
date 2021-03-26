import React, {Component} from "react";
import stock01 from "./img/stock01.png";
import stock02 from "./img/stock02.png";
import stock03 from "./img/stock03.png";
import stock04 from "./img/stock04.png";


class RecentStock extends Component {
    
    render() {
        return(
            <div style={{backgroundColor:"#043970",borderRadius:5}}>
                <h2 className="titles">Recently Restocked</h2>
                <ul className="recentlyRestocked">
                    <img className="RRStockItems" src={stock01}/>
                    <img className="RRStockItems" src={stock02}/>
                    <img className="RRStockItems" src={stock03}/>
                    <img className="RRStockItems" src={stock04}/>
                </ul>
            </div>
        );
    }
}

export default RecentStock;