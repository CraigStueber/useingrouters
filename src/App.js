import React, {Component} from 'react';
import './App.css';
import Chips from './Chips';
import Soda from './Soda';
import VendingMachine from './VendingMachine';
import Candy from './Candy';
import { Route, Switch, NavLink } from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="App">
    <nav>
    <NavLink exact activeClassName="active" to='/'>
    Home
    </NavLink>
    <NavLink exact activeClassName="active" to='/Chips'>
    Chips
    </NavLink>
    <NavLink exact activeClassName="active" to='/Candy'>
    Candy
    </NavLink>
    <NavLink exact activeClassName="active" to='/Soda'>
    Soda
    </NavLink>
    </nav>
    <Switch>
      <Route exact path ='/' component= {VendingMachine}/>
      <Route exact path ='/Candy' component= {Candy}/>
      <Route exact path ='/Soda' component= {Soda}/>
      <Route exact path ='/Chips' component= {Chips}/>
    </Switch>
    </div>
  );
}}

export default App;
