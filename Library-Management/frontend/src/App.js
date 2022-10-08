import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookEdit from "./BookEdit";
import CheckedOut from './CheckedOut';


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/books' exact={true} component={BookList}/>
            <Route path='/books/checked_out' exact={true} component={CheckedOut}/>
            <Route path='/books/:id' component={BookEdit}/>
            
          </Switch>
        </Router>
    )
  }
}

export default App;