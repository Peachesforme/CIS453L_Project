import React, {Component} from "react";
import "./ContentStyle.css"
import ItemComponent from './ItemComponent'

const itemList = [ 
    { name: 'new01', price: 13.99, quantity: 250},
    { name: 'new02', price: 0.79, quantity: 2605},
    { name: 'new03', price: 8.99, quantity: 12},
    { name: 'new04', price: 0.78, quantity: 3299},
    { name: 'new05', price: 18.99, quantity: 12},
    { name: 'new06', price: 9.99, quantity: 2},
    { name: 'new07', price: 16.81, quantity: 83},
 ]

class Sales extends Component {
    render() {
        return(
            <div className="content Sales">
                <h2 className="title">Sales</h2>
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

export default Sales;