import React, {Component} from 'react';
import {Navbar, NavbarBrand, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


function refreshPage() {
    window.location.reload(false);
  }
// function UrlChange() {
  
//   const history = useHistory();
  
//   const routeChange = () =>{ 
//     let path = `/`; 
//     history.push(path);
//   }
// }

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
            <NavbarBrand onClick={refreshPage} tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand onClick={refreshPage} tag={Link} to="/">Why Not Work</NavbarBrand>

        </Navbar>;
    }
}