package com.gilliard.LibraryManagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "checked_out")
public class CheckedOut {
	
	@Id
    @GeneratedValue
    private Long id;
	@OneToOne
	@JoinColumn(name = "book_id")
	private Book client;
	private String name;
	private String number;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Book getClient() {
		return client;
	}
	public void setClient(Book client) {
		this.client = client;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	


}
