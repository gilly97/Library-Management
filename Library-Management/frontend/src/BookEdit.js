import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

 

class BookEdit extends Component {

refreshPage() {
    window.location.href = "http://localhost:3000/books";
    
  }
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
            const book = await (await fetch(`http://localhost:8080/books/${this.props.match.params.id}`)).json();
            this.setState({item: book});
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
                    </FormGroup>
                    <FormGroup>
                        <select  name="years" id="years" value={item.years || ''}
                               onChange={this.handleChange} autoComplete="years">
                            <option value=""></option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>          
                        </select>
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
                        <select  name="genre" id="genre" value={item.genre || ''}
                               onChange={this.handleChange} autoComplete="genre">
                            <option value=""></option>
                            <option value="Autobiography">Autobiography</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Genre-fiction">Genre-fiction</option>
                            <option value="History">History</option>
                            <option value="Non-fiction">Non-fiction</option>
                            <option value="Novel">Novel</option>
                            <option value="Poetry">Poetry</option>
                        </select>
                    </FormGroup>
                    <br/>
                    <br/>
                    <FormGroup>
                        
                        <Button color="primary" type="submit" onClick={() => this.refreshPage()}>Save</Button>{' '}
                        <Button color="secondary" onClick={() => this.refreshPage()}>Cancel</Button>
                      
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(BookEdit);