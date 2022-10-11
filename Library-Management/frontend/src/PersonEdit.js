import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';



class PersonEdit extends Component {
  refreshPage() {
    window.location.href = "http://localhost:3000/persons";
    
  }
    emptyPerson = {
        name: '',
        number: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyPerson
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
           // console.log(fetch(`http://localhost:8080/books/${this.props.match.params.id}`));
            const person = await (await fetch(`http://localhost:8080/persons/${this.props.match.params.id}`)).json();
            //${this.props.match.params.name}
            this.setState({item: person});
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
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('http://localhost:8080/persons' + (item.id ? '/' + item.id : ''), {
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
        const title = <h2>{item.id ? 'Edit Person' : 'Add Person'}</h2>;
    
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
                    
                    <FormGroup>
                        <Button color="primary" type="submit" onClick={() => this.refreshPage()}>Save</Button>{' '}
                        <Button color="secondary" onClick={() => this.refreshPage()}>Cancel</Button>                    
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(PersonEdit);