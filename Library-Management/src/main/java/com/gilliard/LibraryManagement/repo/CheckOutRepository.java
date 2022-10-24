package com.gilliard.LibraryManagement.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gilliard.LibraryManagement.model.CheckOut;
import com.gilliard.LibraryManagement.model.Person;

public interface CheckOutRepository extends JpaRepository<CheckOut, Long>{
	
	@Query(value = "SELECT c.books FROM CheckOut c WHERE id = :id")	
	public List<Object[]> getBook(@Param("id") Long id);
	
	//Get a Person's Check Out
	@Query(value = "SELECT c FROM CheckOut c WHERE person_id = :id")	
	public Optional <CheckOut> getStatements(@Param("id") Long id);
	
}
