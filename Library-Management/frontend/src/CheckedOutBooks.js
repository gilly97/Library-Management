import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

  function checkOut(book) {
      console.log(book);
    book.checkedOut = true;
   // window.location.href="";
    console.log(book);
  }
class CheckedOutBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
      //  this.remove = this.remove.bind(this);
      //  this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/books/checked_out')
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
                   {/* <Button size="sm" color="info" onClick={() => checkOut(book)}>View Details</Button>*/}
                    <Button size="sm" color="warning" onClick={() => checkOut(book)}>Return</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <br/>
                {/* <div className="float:right">
                    <a href = "http://localhost:3000/books/new">
                        <Button color="outline-success">Add Book</Button>
                    </a>
                </div>
                <br/>
                <a href = "http://localhost:3000/books/checked_out">
                    <Button color="outline-danger">Checked Out Books</Button>
                </a> */}
                <h3><br/>Checked Out Books</h3>
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
}export default CheckedOutBooks;