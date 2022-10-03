import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

function refreshPage(id) {
    window.location.href="clients/"+id;
  }

class ClientList extends Component {

    constructor(props) {
        super(props);
        this.state = {clients: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
         fetch('http://localhost:8080/clients')
             .then(response => response.json())
             .then(data => this.setState({clients: data}));
        //THIS HELPS FOR DEBUGGING FETCHED DATA!!!
//         var responseClone; // 1
// fetch('http://localhost:8080/clients')
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
    async remove(id) {
        await fetch(`http://localhost:8080/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.clients].filter(i => i.id !== id);
            this.setState({clients: updatedClients});
        });
    }
    
    render() {
        const {clients, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    //FROM HERE DOWN IS FUNCTIONING PROPERLY BESIDES THE SWITCHING OF PAGES
        const clientList = clients.map(client => {
            console.log(client.id);
            return <tr key={client.id}>
                <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
                <td>{client.email}</td>
                <td>
                    <ButtonGroup>
                    
                        <Button size="sm" color="primary" onClick={() => refreshPage(client.id)}>Edit</Button>
                    
                        <Button size="sm" color="danger" onClick={() => this.remove(client.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
    
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <a href = "http://localhost:3000/clients/new">
                            <Button color="success">Add Book</Button>
                        </a>
                    </div>
                    <h3>Books</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Author</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clientList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default ClientList;
//<Link to="/clients/new">Add Client</Link>