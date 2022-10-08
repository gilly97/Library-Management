package com.gilliard.LibraryManagement.service;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gilliard.LibraryManagement.model.Book;
import com.gilliard.LibraryManagement.repo.CheckedOutRepository;
import com.gilliard.LibraryManagement.repo.BookRepository;

@RestController
@RequestMapping("/checked_out")
public class CheckedOutController {
	
    private final CheckedOutRepository checkedOutRepository;

    public CheckedOutController(CheckedOutRepository checkedOutRepository) {
        this.checkedOutRepository = checkedOutRepository;
    }
	
}
