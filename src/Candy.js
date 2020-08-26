import React, { Component } from 'react'
import IMG_0822 from './assets/IMG_0822.JPG';
import './App.css';


class Candy extends Component {
    render(){
        return(
            <div><h1>another page3</h1>
            <img className="image" src={IMG_0822} alt="Stuff"/>
            </div>
        );
    }
}

export default Candy;
