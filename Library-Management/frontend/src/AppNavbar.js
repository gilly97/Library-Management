import React, {Component} from 'react';
import {Navbar, Button} from 'reactstrap';

function refreshPage() {
    window.location.href = "http://localhost:3000";
  }

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md" role = "navigation">
            <Button color="outline-warning" onClick={refreshPage}>Home</Button>

        </Navbar>;
    }
}
