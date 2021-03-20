import React, {Component} from "react";
import stock01 from "./stock01.png";
import stock02 from "./stock02.png";
import stock03 from "./stock03.png";
import stock04 from "./stock04.png";


class RecentStock extends Component {
    
    render() {
        return(
            <div style={{backgroundColor:"#043970"}}>
                <h2 className="titles">Recently Restocked</h2>
                <ul className="recentlyRestocked">
                    <li><img src={stock01}/></li>
                    <li><img src={stock02}/></li>
                    <li><img src={stock03}/></li>
                    <li><img src={stock04}/></li>
                </ul>
            </div>
        );
    }
}

export default RecentStock;