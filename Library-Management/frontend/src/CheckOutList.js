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
        this.state = {             
                        checkOuts: {
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
         fetch('http://localhost:8080/check_out')
             .then(response => response.json())
             .then(data => this.setState({checkOuts: data}));

    }

    async remove(id) {
        await fetch(`http://localhost:8080/check_out/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedCheckOuts = [...this.state.checkOuts].filter(i => i.id !== id);
            this.setState({checkdOuts: updatedCheckOuts});
        });
    }
//----------------------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------------------
    
    render() {
        const {checkOuts, isLoading} = this.state;
        console.log(checkOuts);
    
        if (isLoading) {
            return <p>Loading...</p>;
        }

        const checkOutsList = checkOuts.map(checkOut => {

            return <tr key={checkOut.id}>
                <td style={{whiteSpace: 'nowrap'}}>{checkOut.person.name}</td>
                <td>{checkOut.person.number}</td> 

                <td>                                   
                    <ButtonGroup>
                        {/* <Button size="sm" color="success" onClick={() => this.checkOut(person.id)}>Check Out</Button> */}
                        <Button size="sm" color="info" onClick={() => this.refreshPage(checkOut.person.id)}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(checkOut.person.id)}>Delete</Button>
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
                        <a href = "http://localhost:3000/check_out/new">
                            <Button color="outline-success">New Check Out</Button>
                        </a>
                    </div>
                    <br/>

                    <h3><br/>Members</h3>

                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="40%">Name</th>
                            <th width="40%">Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {checkOutsList}
                        </tbody>
                    </Table>

                    
                </Container>
            </div>
        );
    }
}
export default PersonList;