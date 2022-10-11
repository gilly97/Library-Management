package com.gilliard.LibraryManagement.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gilliard.LibraryManagement.model.CheckOut;

public interface CheckOutRepository extends JpaRepository<CheckOut, Long>{
	
	@Query(value = "SELECT c.books FROM CheckOut c WHERE id = :id")	
	public List<Object[]> getBook(@Param("id") Long id);
}
