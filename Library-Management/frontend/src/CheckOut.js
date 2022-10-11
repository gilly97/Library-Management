import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

function refreshPage() {
    window.location.href = "http://localhost:3000/persons";
    
  }

class CheckOut extends Component {

    emptyItem = {
        person_id: Number,
    };


//GOOD
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    //GOOD
    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            console.log(fetch(`http://localhost:8080/check_out/${this.props.match.params.id}`));
            const check_out = await (await fetch(`http://localhost:8080/check_out/${this.props.match.params.id}`)).json();
            //${this.props.match.params.name}
            this.setState({item: check_out});
            //console.log(this.state.id);
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    //GOOD
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('http://localhost:8080/check_out' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

    }
    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Checkout' : 'Checkout Books'}</h2>;
    
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Number</Label>
                        <Input type="text" name="number" id="number" value={item.number || ''}
                               onChange={this.handleChange} autoComplete="number"/>
                    </FormGroup>
                    <br/>
                    <br/>
                    <FormGroup>
                        
                        <Button color="primary" type="submit" onClick={() => refreshPage()}>Save</Button>{' '}
                        <Button color="secondary" onClick={() => refreshPage()}>Cancel</Button>
                      
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }

    
}
export default withRouter(CheckOut);