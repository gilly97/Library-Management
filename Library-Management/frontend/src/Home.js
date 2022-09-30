import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <a href = "http://localhost:3000/clients">
                        <Button color="link">Clients</Button>
                    </a>
                </Container>
            </div>
        );
    }
}


export default Home;