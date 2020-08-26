import React, { Component } from 'react'
import coffee from './assets/coffee.jpg';
import './App.css';

class VendingMachine extends Component{
    render(){
        return(
            <div><h1>This is the Home page</h1>
            <img className="image" src={coffee} alt ="Something"/>
           
            </div>
        )
    }
}

export default VendingMachine;