import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookEdit from "./BookEdit";
import CheckedOutBooks from './CheckedOutBooks';
import PersonList from './PersonList';
import PersonEdit from "./PersonEdit";
import CheckOut from "./CheckOut";


class App extends Component {
  render() {
    return (
        <Router>
          <Switch> 
            <Route path='/books/checked_out' exact={true} component={CheckedOutBooks}/>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/books' exact={true} component={BookList}/> 
            <Route path='/check_out/:id' component={CheckOut}/>                     
            <Route path='/books/:id' component={BookEdit}/>
            <Route path='/persons' exact={true} component={PersonList}/>           
            <Route path='/persons/:id' component={PersonEdit}/>
           
          </Switch>
        </Router>
    )
  }
}

export default App;