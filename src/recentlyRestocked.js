import React, {Component} from "react";
import ItemComponent from './ItemComponent'
import "./ContentStyle.css";


const itemList = [ 
    { name: 'stock01', price: 3.99, quantity: 250},
    { name: 'stock02', price: 9.99, quantity: 999},
    { name: 'stock03', price: 9.99, quantity: 999},
    { name: 'stock04', price: 9.99, quantity: 999},
 ]

class RecentStock extends Component {
    
    render() {
        return(
            <div className="content Restock">
                <h2 className="title">Recently Restocked</h2>
                <div className="itemList">
                    { itemList.map( (_,i) => {
                    return <ItemComponent 
                        name={itemList[i].name} 
                        price={itemList[i].price}
                        quantity={itemList[i].quantity}
                    />
                    })}
                </div>
            </div>
        );
    }
}

export default RecentStock;