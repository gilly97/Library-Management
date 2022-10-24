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
                    <br/>
                    <h3><center>Library Management System</center></h3>
                    <br/>
                    <br/>
                    <div>
                        <center>
                        <a href = "http://localhost:3000/persons">
                            <Button color="primary">Members</Button>
                        </a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a href = "http://localhost:3000/books">
                            <Button color="success">Available Books</Button>
                        </a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a href = "http://localhost:3000/books/checked_out">
                            <Button color="danger">Checked Out Books</Button>
                        </a>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <a href = "http://localhost:3000/check_out/new">
                            <Button color="warning">Check Outs</Button>
                        </a>
                        </center>
                    </div>
                    <br/>
                </Container>
            </div>
        );
    }
}


export default Home;