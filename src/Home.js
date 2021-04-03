import React, {Component} from "react";
import Marque01 from "./img/Marque01.png";
import Sales from './Sales';
import RecentlyRestocked from './recentlyRestocked'
import ServiceTools from './ServiceTools'
import "./Home.css";

class Home extends Component {
    render() {
        return(
            <>
            <div id="homeDIV">
                <img src={Marque01} className="homeImg"/>
                <br></br>
                <p id="COVIDMSG">
                    Due to COVID-19, we may be 
                    out of stock for the component you may need.
                    Please, check out our "Recently Stocked" page 
                    if we were out of a product you were looking for last time.
                </p> 
            </div>
            <div className="Home prodservDisplay">
                <Sales />
                <br></br>
                <h2  className="breakTitle">Manufacturers</h2>
                <div className="firstBreak">  
                    <img src={require('./img/man01.png').default} className="manImg"></img>
                    <img src={require('./img/man02.png').default} className="manImg"></img>
                    <img src={require('./img/man03.png').default} className="manImg"></img>
                    <img src={require('./img/man04.png').default} className="manImg"></img>
                    <img src={require('./img/man05.png').default} className="manImg"></img>
                    <img src={require('./img/man06.png').default} className="manImg"></img>
                </div>
                <br></br>
                <ServiceTools />
                <br></br>
                <div className="secondBreak">
                    <h2 className="breakTitle"> Technical Resources</h2>
                    <div className="techResouce">
                        <img src={require('./img/tec01.png').default} id='eBooks' className="tecImg"></img>
                        <label for="eBooks">eBooks</label>
                    </div>
                    <div className="techResouce">
                        <img src={require('./img/tec02.png').default} id='Applications' className="tecImg"></img>
                        <label >Applications</label>
                    </div>
                    <div className="techResouce">
                        <img src={require('./img/tec03.png').default} id='Blog' className="tecImg"></img>
                        <label>Blog Articles</label>
                    </div>
                    <div className="techResouce">
                        <img src={require('./img/tec04.png').default} id='Empowering' className="tecImg"></img>
                        <label >Empowering Innovation Together</label>
                    </div>
                    <div className="techResouce">
                        <img src={require('./img/tec05.png').default} id='DevelopmentTools' className="tecImg"></img>
                        <label>Development Tools Center</label> 
                    </div>
                </div>
                <br></br>
                <RecentlyRestocked />                           
            </div>
            </>
        );
    }
}

export default Home;