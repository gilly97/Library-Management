import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

function refreshPage() {
    window.location.href = "http://localhost:3000/clients";
    
  }

class ClientEdit extends Component {

    emptyItem = {
        name: '',
        email: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            console.log(fetch(`http://localhost:8080/clients/${this.props.match.params.id}`));
            const client = await (await fetch(`http://localhost:8080/clients/${this.props.match.params.id}`)).json();
            //${this.props.match.params.name}
            this.setState({item: client});
            console.log(this.state.id);
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
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('http://localhost:8080/clients' + (item.id ? '/' + item.id : ''), {
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
        const title = <h2>{item.id ? 'Edit Book' : 'Add Book'}</h2>;
    
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
                        <Label for="email">Author</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        
                        <Button color="primary" type="submit" onClick={() => refreshPage()}>Save</Button>{' '}
                        <Button color="secondary" onClick={() => refreshPage()}>Cancel</Button>
                      
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(ClientEdit);