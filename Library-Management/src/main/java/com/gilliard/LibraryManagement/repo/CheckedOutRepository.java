package com.gilliard.LibraryManagement.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gilliard.LibraryManagement.model.CheckedOut;
import com.gilliard.LibraryManagement.model.Book;

public interface CheckedOutRepository extends JpaRepository<CheckedOut, Long>{
	

}
