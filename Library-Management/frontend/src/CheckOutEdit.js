import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, ButtonGroup, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

function refreshPage() {
    window.location.href = "http://localhost:3000/persons";
    
  }

  class CheckOutEdit extends Component {
    refreshPage() {
      window.location.href = "http://localhost:3000/persons";
      
    }
      emptyCheckOut = {
            person: {
                id: Number,
                name: '',
                number: ''
            },
            books: []

      };
  
      constructor(props) {
          super(props);
          this.state = {
                item: this.emptyCheckOut
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          
      }
      async componentDidMount() {
       //   if (this.props.match.params.id == 'new') {
           console.log(this.props.match.params.id);
       // fetch(`http://localhost:8080/persons/check_out${this.props.match.params.id}`).then(res => res.json());
              Promise.all([
             // console.log(fetch(`http://localhost:8080/books/${this.props.match.params.id}`));
                 fetch(`http://localhost:8080/persons/check_out${this.props.match.params.id}`)
                     .then(response => response.json()),
                fetch(`http://localhost:8080/books`)
                    .then(response => response.json())

              ]).then(([person, books]) => {
                  console.log(books);
                  let checkOut = {...this.state.item};
                  checkOut.person = person;
                  checkOut.books = books;
                  console.log(checkOut);
                this.setState({item: checkOut});
                console.log(this.state);
            })
              
              //thenthis.setState({item: checkOut});
      //    }                
              //console.log(this.state.id);
              //${this.props.match.params.name}
          
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
      
          await fetch('http://localhost:8080/persons' + (item.id ? '/' + item.id : ''), {
              method: (item.id) ? 'PUT' : 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(item),
          });
  
      }
      render() {
        const {checkOut, isLoading} = this.state;
        console.log(this.state);
        console.log(checkOut);

        //const books = checkOut.books;
        //console.log(this.state);
        if (isLoading) {    
            return <p>Loading...</p>;
        }
        //FROM HERE DOWN IS FUNCTIONING PROPERLY BESIDES THE SWITCHING OF PAGES
    
        // const ListBooksForCheckOut = checkOut.books.map(book => {
        //     //console.log(book.id);
        //     //console.log(book.checkedOut);

        //     // const handleOnChange = () => {
        //     //     book.checkedOut = book.checkedOut ? !book.checkedOut : book.checked_Out;
        //     //     if(!this.emptyCheckOut.books.includes(book)){
        //     //         this.emptyCheckOut.books.unshift(book);
        //     //     }
        //     //     else{
        //     //         this.emptyCheckOut.books = this.emptyCheckOut.books.filter(function(item){
        //     //             return item !== book;
        //     //         })
        //     //     }
        //     //     console.log('the box was toggled'+ book.name);
                
        //     //     console.log(this.emptyCheckOut.books);
              
        //     // };

        
        //     return <tr key={book.id}>
        //         <td style={{whiteSpace: 'nowrap'}}>{book.name}</td>
        //         <td>{book.author}</td>
        //         <td>{book.years}</td>
        //         <td>{book.publisher}</td>
        //         <td>{book.genre}</td>
                
        //         <td>

                   
                  
        //             <ButtonGroup>
        //             {/* <Form id="checkboxes" onSubmit={this.handleSubmit}>
        //                 <FormGroup>
        //                     <Input type ="checkbox" name="check_out" id="check_out" value={book}
        //                      onChange={handleOnChange} autoComplete="check_out"></Input>
        //                </FormGroup>
        //               </Form> */}
        //             &nbsp;
        //             &nbsp;
        //             &nbsp;
        //                 <Button size="sm" color="info" onClick={() => this.refreshPage(book.id)}>Edit</Button>

        //                 <Button size="sm" color="danger" onClick={() => this.remove(book.id)}>Delete</Button>
        //             </ButtonGroup>
                   
        //         </td>
        //     </tr>
        // });
        //            // console.log(emptyCheckOut.books);
        // const data = "Hello Everyone";
        // //onChange={this.handleChange}
        // return (
        //     <div>
        //         <AppNavbar/>
        //         <Container fluid>
        //        {/* < Displaybook data = {data}/> */}
        //             <br/>
                    
        //             <div className="float:right">
        //                 <a href = "http://localhost:3000/books/new">
        //                     <Button color="outline-success">Add Book</Button>
        //                 </a>
        //             </div>

        //             <br/>

        //             <a href = "http://localhost:3000/books/checked_out">
        //                 <Button color="outline-danger">Checked Out Books</Button>
        //             </a>

        //             <h3><br/>Available Books</h3>

        //             <Table className="mt-4">
        //                 <thead>
        //                 <tr>
        //                     <th width="15%">Name</th>
        //                     <th width="15%">Author</th>
        //                     <th width="15%">Year</th>
        //                     <th width="15%">Publisher</th>
        //                     <th width="15%">Genre</th>
        //                     <th width="25%">Actions</th>
        //                 </tr>
        //                 </thead>
        //                 <tbody>
        //                 {ListBooksForCheckOut}
        //                 </tbody>
        //             </Table>

        //         </Container>
        //     </div>
        // );
    }
  }
  export default withRouter(CheckOutEdit);