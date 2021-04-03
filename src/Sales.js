import React, {Component} from "react";
import "./ContentStyle.css"
import ItemComponent from './ItemComponent'

const itemList = [ 
    { name: 'new01', price: 3.99, quantity: 250},
    { name: 'new02', price: 9.99, quantity: 999},
    { name: 'new03', price: 9.99, quantity: 999},
    { name: 'new04', price: 9.99, quantity: 999},
    { name: 'new05', price: 9.99, quantity: 999},
    { name: 'new06', price: 9.99, quantity: 999},
    { name: 'new07', price: 9.99, quantity: 999},
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