package com.gilliard.LibraryManagement.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gilliard.LibraryManagement.model.Book;
import com.gilliard.LibraryManagement.repo.BookRepository;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

//	-------------------------BOOK SERVICE----------------------------------------------
    
//    //View All Books
//    @GetMapping
//    public List<Book> getBooks() {
//        return bookRepository.findAll();
//    }
    
    //View Available Books
    @GetMapping
    public List<Book> getAvailableBooks() {
        return bookRepository.getAvailableBooks();
    }
    
    //View Checked Out Books
    @GetMapping("/checked_out")
    public List<Book> getCheckedOutBooks() {
        return bookRepository.getCheckedOutBooks();
    }


    //View a Book
    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    //Add a new Book
    @PostMapping
    public ResponseEntity createBook(@RequestBody Book book) throws URISyntaxException {
        Book savedBook = bookRepository.save(book);
        return ResponseEntity.created(new URI("/books/" + savedBook.getId())).body(savedBook);
    }

    //Edit a Book
    @PutMapping("/{id}")
    public ResponseEntity updateBook(@PathVariable Long id, @RequestBody Book book) {
        Book currentBook = bookRepository.findById(id).orElseThrow(RuntimeException::new);
        currentBook.setName(book.getName());
        currentBook.setAuthor(book.getAuthor());
        currentBook = bookRepository.save(book);

        return ResponseEntity.ok(currentBook);
    }

    //Delete a Book
    @DeleteMapping("/{id}")
    public ResponseEntity deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
//	-----------------------------------------------------------------------------------

}
