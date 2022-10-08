package com.gilliard.LibraryManagement.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gilliard.LibraryManagement.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	
	@Query(value = "SELECT * FROM book WHERE" + 
			   " checked_out = false", nativeQuery = true)	
	public List<Book> getAvailableBooks();
	
	@Query(value = "SELECT * FROM book WHERE" + 
			   " checked_out = true", nativeQuery = true)	
	public List<Book> getCheckedOutBooks();

	
}