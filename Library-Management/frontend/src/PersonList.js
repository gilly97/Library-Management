import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

class PersonList extends Component {

refreshPage(id) {
    window.location.href="persons/"+id;
  }
checkOut(id) {
    window.location.href="check_out"+id;
  }

    constructor(props) {
        super(props);
        this.state = {persons: [], 
                        
                      checkOut: {
                            person: {
                                id: Number,
                                name: '',
                                number: ''
                            },
                            books: []
            } 
        };
        this.remove = this.remove.bind(this);

    }

    componentDidMount() {
         fetch('http://localhost:8080/persons')
             .then(response => response.json())
             .then(data => this.setState({persons: data}));

    }

    async remove(id) {
        await fetch(`http://localhost:8080/persons/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedPersons = [...this.state.persons].filter(i => i.id !== id);
            this.setState({persons: updatedPersons});
        });
    }

    async newCheckOut(person) {
        console.log(person);
        let NewPersons = {...this.state.persons};
        console.log(NewPersons);
        this.state.checkOut.person = person;
        let newCheckOut = {...this.state};

        this.setState({checkOut: newCheckOut});
        console.log(newCheckOut);


        await fetch(`http://localhost:8080/check_out/${person.id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCheckOut),
       });
 
    }


    
    render() {
        const {persons, isLoading} = this.state;
        console.log(persons);
    
        if (isLoading) {
            return <p>Loading...</p>;
        }

        const personList = persons.map(person => {

            return <tr key={person.id}>
                <td style={{whiteSpace: 'nowrap'}}>{person.name}</td>
                <td>{person.number}</td> 

                <td>                                   
                    <ButtonGroup>
                        {/* <Button size="sm" color="success" onClick={() => this.checkOut(person.id)}>Check Out</Button> */}
                        <Button size="sm" color="info" onClick={() => this.refreshPage(person.id)}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(person.id)}>Delete</Button>
                    </ButtonGroup>
                   
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <br/>

                    <div className="float:right">
                        <a href = "http://localhost:3000/persons/new">
                            <Button color="outline-success">Add Member</Button>
                        </a>
                    </div>
                    <br/>

                    <h3>Members</h3>

                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="40%">Name</th>
                            <th width="40%">Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {personList}
                        </tbody>
                    </Table>

                    
                </Container>
            </div>
        );
    }
}
export default PersonList;