package com.gilliard.LibraryManagement.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gilliard.LibraryManagement.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long>{
	

}