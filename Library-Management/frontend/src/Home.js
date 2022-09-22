import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

function refreshPage() {
    window.location.reload(false);
  }

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link" onClick={refreshPage}><Link to="/clients">Clients</Link></Button>
                </Container>
            </div>
        );
    }
}


export default Home;