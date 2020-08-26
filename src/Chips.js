import React, { Component } from 'react';
import IMG_0291 from './assets/IMG_0291.JPG';
import './App.css';


class Chips extends Component{
    render(){
        return(
            <div><h1>another page</h1>
            <img className="image" src={IMG_0291} alt="Stuff"/>
            </div>
        )
    }
}

export default Chips;