package com.gilliard.LibraryManagement.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gilliard.LibraryManagement.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
	
}