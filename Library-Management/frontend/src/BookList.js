import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';


class BookList extends Component {

refreshPage(id) {
    window.location.href="books/"+id;
  }

    emptyCheckOut = {
        books: []
    };
 
    constructor(props) {
        super(props);
        this.state = {books: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
         fetch('http://localhost:8080/books')
             .then(response => response.json())
             .then(data => this.setState({books: data}));
    }

    async remove(id) {
        await fetch(`http://localhost:8080/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedBooks = [...this.state.books].filter(i => i.id !== id);
            this.setState({books: updatedBooks});
        });
    }
    
    render() {
        const {books, isLoading} = this.state;
        console.log(books);
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const bookList = books.map(book => { 
            return <tr key={book.id}>
                <td style={{whiteSpace: 'nowrap'}}>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.years}</td>
                <td>{book.publisher}</td>
                <td>{book.genre}</td>
                
                <td>                  
                  
                    <ButtonGroup>
                        <Button size="sm" color="info" onClick={() => this.refreshPage(book.id)}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(book.id)}>Delete</Button>
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
                        <a href = "http://localhost:3000/books/new">
                            <Button color="outline-success">Add Book</Button>
                        </a>
                    </div>
                    <br/>
                    <h3>Available Books</h3>

                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="15%">Name</th>
                            <th width="15%">Author</th>
                            <th width="15%">Year</th>
                            <th width="15%">Publisher</th>
                            <th width="15%">Genre</th>
                            <th width="25%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookList}
                        </tbody>
                    </Table>

                </Container>
            </div>
        );
    }
}
export default BookList;

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