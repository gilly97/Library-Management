import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, ButtonGroup, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';

function refreshPage() {
    window.location.href = "http://localhost:3000/persons";
    
  }

//   class CheckOutEdit extends Component {
//     refreshPage() {
//       window.location.href = "http://localhost:3000/persons";
      
//     }
//       emptyCheckOut = {
//             person: {
//                 id: Number,
//                 name: '',
//                 number: ''
//             },
//             books: []

//       };
//       books = [];
  
//       constructor(props) {
//           super(props);
//           this.state = {
//                 item: this.emptyCheckOut
//           };
//           this.handleChange = this.handleChange.bind(this);
//           this.handleSubmit = this.handleSubmit.bind(this);
          
//       }
//       async componentDidMount() {
//        //   if (this.props.match.params.id == 'new') {
//            console.log(this.props.match.params.id);
//        // fetch(`http://localhost:8080/persons/check_out${this.props.match.params.id}`).then(res => res.json());
//               Promise.all([
//                  fetch(`http://localhost:8080/persons/check_out${this.props.match.params.id}`)
//                      .then(response => response.json()),
//                 fetch(`http://localhost:8080/books`)
//                     .then(response => response.json())

//               ]).then(([person, books]) => {
//                   console.log(books);
//                   let checkOut = {...this.state.item};
//                   checkOut.person = person;
//                   this.emptyCheckOut.person = person;
//                   checkOut.books = books;
//                   console.log(checkOut);
//                 this.setState({item: checkOut});
//                 console.log(this.state);
//             })     
//       }
 
//       async handleSubmit(event) {
//           event.preventDefault();
//          // const {item} = this.state;
//       console.log(event);
//         //   await fetch('http://localhost:8080/persons' + (item.id ? '/' + item.id : ''), {
//         //       method: (item.id) ? 'PUT' : 'POST',
//         //       headers: {
//         //           'Accept': 'application/json',
//         //           'Content-Type': 'application/json'
//         //       },
//         //       body: JSON.stringify(item),
//         //   });
//       }

//       async remove(id) {
//         await fetch(`http://localhost:8080/books/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         }).then(() => {
//             let item = {...this.state.item};
//             let updatedBooks = [...this.state.item.books].filter(i => i.id !== id);
//             item.books = updatedBooks;
//             this.setState({item: item});
//         });
//     }

//      handleChange = (event, book) => {
//         if(event.target.checked){
//             this.books.unshift(book);
//             this.emptyCheckOut.books = this.books;
//             console.log(this.books);
//             console.log(this.emptyCheckOut);

//         }
//         else{
//             let id = book.id;
//             let updatedBooks = [...this.books].filter(i => i.id !== id);
//             this.emptyCheckOut.books = updatedBooks;
//             this.books = updatedBooks;
//             console.log(this.books);
//             console.log(this.emptyCheckOut);
//         }
      
//     };

//     async handleSubmit(event) {
//         event.preventDefault();
//         console.log(this.state);
//         console.log(this.emptyCheckOut);

//         this.setState({item: this.emptyCheckOut});
//         console.log(this.state);

//          const {item} = this.state;
//         console.log(item.person.id);
//         console.log(item);

    
//         await fetch('http://localhost:8080/check_out', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(item),
//         });

//     }
//       render() {
//         //const {checkOut, isLoading} = this.state;
//         const checkOut = JSON.parse(JSON.stringify(this.state));
//         console.log(this.state);
//         console.log(checkOut.item);

//         //return 1;
//         //const books = checkOut.books;
//         //console.log(this.state);
//         // const handleChange = (event, book) => {
//         //     if(event.target.checked){
//         //         this.books.unshift(book);
//         //     }
//         //     this.emptyCheckOut.books = this.books;
//         //     console.log(this.books);
//         //     console.log(this.emptyCheckOut);
          
//         // };
//         const ListBooksForCheckOut = checkOut.item.books.map(book => {
        
//             return <tr key={book.id}>
//                 <td style={{whiteSpace: 'nowrap'}}>{book.name}</td>
//                 <td>{book.author}</td>
//                 <td>{book.years}</td>
//                 <td>{book.publisher}</td>
//                 <td>{book.genre}</td>
                
//                 <td>

                   
                  
//                     <ButtonGroup>
//                      <Form id="checkboxes" onSubmit={this.handleSubmit}>
//                         <FormGroup>
//                         <select>
//                         <Input type="text" name="name" id="name" value={this.state.item.person.name}
//                                /*onChange={this.handleName}*/ autoComplete="name"/>
//                             <Input type ="checkbox" name="check_out" id="check_out"
//                              onChange={event => this.handleChange(event, book)} autoComplete="check_out"></Input>
//                        </FormGroup>
//                       </Form> 
//                     &nbsp;
//                     &nbsp;
//                     &nbsp;
//                         <Button size="sm" color="info" onClick={() => this.refreshPage(book.id)}>Edit</Button>

//                         <Button size="sm" color="danger" onClick={() => this.remove(book.id)}>Delete</Button>
//                     </ButtonGroup>
                   
//                 </td>
//             </tr>
//         });
 
//         return (
//             <div>
//                 <AppNavbar/>
//                 <Container fluid>
//                     <br/>
//                     <div className="">
//                        {/* <a href = "http://localhost:3000">*/}
//                             <Button color="outline-success" type="submit" form="checkboxes">Check Out</Button>
//         {/*</a>*/}
//                     </div>
//                     <br/>

//                     <a href = "http://localhost:3000/books/checked_out">
//                         <Button color="outline-danger">Checked Out Books</Button>
//                     </a>

//                     <h3><br/>Available Books</h3>

//                     <Table className="mt-4">
//                         <thead>
//                         <tr>
//                             <th width="15%">Name</th>
//                             <th width="15%">Author</th>
//                             <th width="15%">Year</th>
//                             <th width="15%">Publisher</th>
//                             <th width="15%">Genre</th>
//                             <th width="25%">Actions</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {ListBooksForCheckOut}
//                         </tbody>
//                     </Table>

//                 </Container>
//             </div>
//         );
//     }
//   }
//   export default withRouter(CheckOutEdit);
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

        books = [];
        persons = [];
  
      constructor(props) {
          super(props);
          this.state = {
              item: this.emptyCheckOut
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          
      }
      async componentDidMount() {
          console.log(this.props);
          if (this.props.match.params.id !== 'new') {
              const checkOut = await (await fetch(`http://localhost:8080/check_out/${this.props.match.params.id}`)).json();
              this.setState({item: checkOut});
          }
          this.persons = (await fetch(`http://localhost:8080/persons`)).json();
          this.books = (await fetch(`http://localhost:8080/books`)).json();
          console.log("mounted");
          console.log(this.persons);
          console.log(this.books);


      }
      handleChange(event) {
          const target = event.target;
          const value = target.value;
          const name = target.name;
          let item = {...this.state.item};
          item[name] = value;
          console.log(target);
          console.log(value);
          console.log(name);
  
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
          const {item} = this.state;
          const title = <h2>{item.id ? 'Edit Check Out' : 'New Check Out'}</h2>;
         
          console.log(this.persons);
          console.log(this.books);

        
          //THIS HELPS WITH LOOPING THROUGH SELECT
//           const Answer = props => 
//   <select>{
//     props.data.map( (x,y) => 
//       <option key={y}>{x}</option> )
//   }</select>;
      
          return <div>
              <AppNavbar/>
              <Container>
                  {title}
                  <h3>Wow</h3>
                  <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <select>  {
                            this.persons.map((person, y) =>
                            <option key={y}>{person}</option>   
                        )}</select>

                      </FormGroup>
                      {/* <FormGroup>
                          <Label for="name">Name</Label>
                          <Input type="text" name="name" id="name" value={item.name || ''}
                                 onChange={this.handleChange} autoComplete="name"/>
                      </FormGroup>
                      <FormGroup>
                          <Label for="author">Number</Label>
                          <Input type="text" name="number" id="number" value={item.number || ''}
                                 onChange={this.handleChange} autoComplete="number"/>
                      </FormGroup>
                      
                      <FormGroup>
                          <Button color="primary" type="submit" onClick={() => this.refreshPage()}>Save</Button>{' '}
                          <Button color="secondary" onClick={() => this.refreshPage()}>Cancel</Button>                    
                      </FormGroup> */}
                      
                  </Form>
              </Container>
          </div>
      }
  }
  export default withRouter(CheckOutEdit);