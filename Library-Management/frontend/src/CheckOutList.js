import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';


//   function checkOut(book) {
//       console.log(book);
//     book.checkedOut = true;
//    // window.location.href="";
//     console.log(book);
//   }

class CheckOutList extends Component {

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
    //    this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
//--------------------------------------------------------------------------------------------------------
async handleSubmit(event) {
    event.preventDefault();
    let checkOut = this.emptyCheckOut;
    this.setState({checkOut: this.emptyCheckOut})
    console.log(checkOut);
   // console.log(await fetch('http://localhost:8080/check_out' + (checkOut.id ? '/' + checkOut.id : '')));

    await fetch('http://localhost:8080/check_out' + (checkOut.id ? '/' + checkOut.id : ''), {
        method: (checkOut.id) ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkOut),
    });

}

    handleCallback = (childData) =>{
        this.setState({books: childData})
    }
//--------------------------------------------------------------------------------------------------------
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

            // const handleOnChange = () => {
            //     book.checkedOut = book.checkedOut ? !book.checkedOut : book.checked_Out;
            //     if(!this.emptyCheckOut.books.includes(book)){
            //         this.emptyCheckOut.books.unshift(book);
            //     }
            //     else{
            //         this.emptyCheckOut.books = this.emptyCheckOut.books.filter(function(item){
            //             return item !== book;
            //         })
            //     }
            //     console.log('the box was toggled'+ book.name);
                
            //     console.log(this.emptyCheckOut.books);
              
            // };

        
            return <tr key={book.id}>
                <td style={{whiteSpace: 'nowrap'}}>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.years}</td>
                <td>{book.publisher}</td>
                <td>{book.genre}</td>
                
                <td>

                   
                  
                    <ButtonGroup>
                    {/* <Form id="checkboxes" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Input type ="checkbox" name="check_out" id="check_out" value={book}
                             onChange={handleOnChange} autoComplete="check_out"></Input>
                       </FormGroup>
                      </Form> */}
                    &nbsp;
                    &nbsp;
                    &nbsp;
                        <Button size="sm" color="info" onClick={() => this.refreshPage(book.id)}>Edit</Button>

                        <Button size="sm" color="danger" onClick={() => this.remove(book.id)}>Delete</Button>
                    </ButtonGroup>
                   
                </td>
            </tr>
        });
                   // console.log(emptyCheckOut.books);
        const data = "Hello Everyone";
        //onChange={this.handleChange}
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
               {/* < Displaybook data = {data}/> */}
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
export default CheckOutList;