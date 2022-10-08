import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

function refreshPage() {
    window.location.href = "http://localhost:3000/books";
    
  }

class BookEdit extends Component {

    emptyItem = {
        name: '',
        author: '',
        checkedOut: false,
        years: '',
        publisher: '',
        genre: ''
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
           // console.log(fetch(`http://localhost:8080/books/${this.props.match.params.id}`));
            const book = await (await fetch(`http://localhost:8080/books/${this.props.match.params.id}`)).json();
            //${this.props.match.params.name}
            this.setState({item: book});
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
    
        await fetch('http://localhost:8080/books' + (item.id ? '/' + item.id : ''), {
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
                        <Label for="author">Author</Label>
                        <Input type="text" name="author" id="author" value={item.author || ''}
                               onChange={this.handleChange} autoComplete="author"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="years">Year</Label>
                        <Input type="text" name="years" id="years" value={item.years || ''}
                               onChange={this.handleChange} autoComplete="years"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="publisher">Publisher</Label>
                        <Input type="text" name="publisher" id="publisher" value={item.publisher || ''}
                               onChange={this.handleChange} autoComplete="publisher"/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for="genre">Genre</Label>
                    </FormGroup>
                    <FormGroup>
                        {/* <Input type="text" name="genre" id="genre" value={item.genre || ''}
                               onChange={this.handleChange} autoComplete="genre"/> */}
                        <select  name="genre" id="genre" value={item.genre || ''}
                               onChange={this.handleChange} autoComplete="genre">
                            <option value=""></option>
                            <option value="Fiction">Fiction</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Fiction">Fiction</option>
                        </select>
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
export default withRouter(BookEdit);