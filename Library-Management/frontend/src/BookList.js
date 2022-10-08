import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

function refreshPage(id) {
    window.location.href="books/"+id;
  }

  function checkOut(book) {
      console.log(book);
    book.checkedOut = true;
   // window.location.href="";
    console.log(book);
  }

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
        this.remove = this.remove.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    componentDidMount() {
         fetch('http://localhost:8080/books')
             .then(response => response.json())
             .then(data => this.setState({books: data}));
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
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
        //FROM HERE DOWN IS FUNCTIONING PROPERLY BESIDES THE SWITCHING OF PAGES
    
        const bookList = books.map(book => {
            //console.log(book.id);
            //console.log(book.checkedOut);
            return <tr key={book.id}>
                <td style={{whiteSpace: 'nowrap'}}>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.years}</td>
                <td>{book.publisher}</td>
                <td>{book.genre}</td>
                
                <td>
                
                    <ButtonGroup>
                        <Button size="sm" color="success" onClick={() => checkOut(book)}>Check Out</Button>
                        <Button size="sm" color="primary" onClick={() => refreshPage(book.id)}>Edit</Button>
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
                    <a href = "http://localhost:3000/books/checked_out">
                        <Button color="outline-danger">Checked Out Books</Button>
                    </a>
                    <h3><br/>Available Books</h3>
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
//<Link to="/books/new">Add Book</Link>