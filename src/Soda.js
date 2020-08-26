import React, { Component } from 'react'
import './App.css';
import IMG_0788 from './assets/IMG_0788.JPG';

class Soda extends Component{
    render(){
        return(
            <div><h1>another page 2</h1>
            <img className="image" src={IMG_0788} alt="Stuff"/>
            </div>
        )
    }
}

export default Soda;