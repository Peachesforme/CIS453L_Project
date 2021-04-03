import React, {Component, createContext} from 'react'
import "./ContentStyle.css";


export default class  ItemComponent extends Component {
    constructor (props) {
        super(props)
    } 
    render() {
        return (
            <div className='itemContainer'>
                <img src={require('./img/'+ this.props.name + '.png').default} className='itemImage' alt={this.props.name}/>
                <br></br>
                <label id="Price" className="itemStats">Price: ${this.props.price}</label>
                <br></br>
                <label id="Quantity" className="itemStats">Stock: {this.props.quantity}</label>
            </div>
        );
    }           
}
// require('./img/' + props.name + '.png')