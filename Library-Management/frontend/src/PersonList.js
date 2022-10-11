import React, { Component, useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';


//   function checkOut(book) {
//       console.log(book);
//     book.checkedOut = true;
//    // window.location.href="";
//     console.log(book);
//   }

class PersonList extends Component {

refreshPage(id) {
    window.location.href="persons/"+id;
  }

newCheckOut(id) {
    window.location.href="check_out/new";
  }
    // emptyPerson = {
    //     persons: []
    // };
 
    constructor(props) {
        super(props);
        this.state = {persons: []};
        this.remove = this.remove.bind(this);
        this.handleChange = this.handleChange.bind(this);
    //    this.handleSubmit = this.handleSubmit.bind(this);

    }
//--------------------------------------------------------------------------------------------------------
    // handleChange(book) {
    //     Array
    // }
//--------------------------------------------------------------------------------------------------------
    componentDidMount() {
         fetch('http://localhost:8080/persons')
             .then(response => response.json())
             .then(data => this.setState({persons: data}));
        //THIS HELPS FOR DEBUGGING FETCHED DATA!!!
//         var responseClone; // 1
// fetch('http://localhost:8080/books')
// .then(function (response) {
//     responseClone = response.clone(); // 2
//     return response.json();
// })
// .then(function (data) {
//     // Do something with data
// }, function (rejectionReason) { // 3
//     console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
//     responseClone.text() // 5
//     .then(function (bodyText) {
//         console.log('Received the following instead of valid JSON:', bodyText); // 6
//     });
// });
    }
//--------------------------------------------------------------------------------------------------------
// async handleSubmit(event) {
//     event.preventDefault();
//     let checkOut = this.emptyCheckOut;
//     this.setState({checkOut: this.emptyCheckOut})
//     console.log(checkOut);
//    // console.log(await fetch('http://localhost:8080/check_out' + (checkOut.id ? '/' + checkOut.id : '')));

//     await fetch('http://localhost:8080/check_out' + (checkOut.id ? '/' + checkOut.id : ''), {
//         method: (checkOut.id) ? 'PUT' : 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(checkOut),
//     });

// }
handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    //this.setState({item});
}
//--------------------------------------------------------------------------------------------------------
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
    
    render() {
        const {persons, isLoading} = this.state;

        
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
        //FROM HERE DOWN IS FUNCTIONING PROPERLY BESIDES THE SWITCHING OF PAGES
        let checked = false;
        const personList = persons.map(person => {
            //console.log(book.id);
            //console.log(book.checkedOut);

            //onChange={handleOnChange}
            const handleChange = () => {
                checked = checked ? !checked : checked;
                return checked;
            }

            return <tr key={person.id}>
                <td style={{whiteSpace: 'nowrap'}}>{person.name}</td>
                <td>{person.number}</td> 

                <td>                                   
                    <ButtonGroup>
                        <Button size="sm" color="success" onClick={() => this.newCheckOut(person.id)}>Check Out</Button>
                        <Button size="sm" color="warning" onClick={() => this.refreshPage(person.id)}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(person.id)}>Delete</Button>
                    </ButtonGroup>
                   
                </td>
            </tr>
        });
                   // console.log(emptyCheckOut.books);

        //onChange={this.handleChange}
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

                    <h3><br/>Members</h3>

                    {/* <a href = "http://localhost:3000/check_out/new">
                        <Button size="sm" color="success" form="checkboxes" type="submit">Check Out</Button>
                    </a> */}
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