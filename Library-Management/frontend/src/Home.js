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
                    <a href = "http://localhost:3000/books">
                        <Button color="secondary">Books</Button>
                    </a>
                    <br/>
                    {/* <a href = "http://localhost:3000/checked_out">
                        <Button color="link">Checked Out Books</Button>
                    </a> */}
                </Container>
            </div>
        );
    }
}


export default Home;