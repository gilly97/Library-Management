package com.gilliard.LibraryManagement.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gilliard.LibraryManagement.model.Book;
import com.gilliard.LibraryManagement.model.CheckOut;
import com.gilliard.LibraryManagement.repo.CheckOutRepository;

@RestController
@RequestMapping("/check_out")
public class CheckOutController {
	
    private final CheckOutRepository checkOutRepository;

    public CheckOutController(CheckOutRepository checkOutRepository) {
        this.checkOutRepository = checkOutRepository;
    }
    //Add a CheckOut of Books
    @PostMapping
    public ResponseEntity checkOutBooks(@RequestBody CheckOut checkOut) throws URISyntaxException {
    	CheckOut savedCheckOut = checkOutRepository.save(checkOut);
        return ResponseEntity.created(new URI("/check_out/"+ savedCheckOut.getId())).body(savedCheckOut);
    }
    
    //Edit a CheckOut
    @PutMapping("/{id}")
    public ResponseEntity updateCheckOut(@PathVariable Long id, @RequestBody CheckOut checkOut) {
        CheckOut currentCheckOut = checkOutRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCheckOut = checkOutRepository.save(checkOut);

        return ResponseEntity.ok(currentCheckOut);
    }
}
