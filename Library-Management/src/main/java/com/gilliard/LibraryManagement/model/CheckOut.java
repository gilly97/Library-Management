package com.gilliard.LibraryManagement.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "check_out")
public class CheckOut {
	
	@Id
    @GeneratedValue
    private Long id;
	@OneToMany(mappedBy = "checkOut", cascade = CascadeType.ALL)
	private List<Book> books;
	@OneToOne
	@JoinColumn(name = "person_id")
	private Person person;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<Book> getBooks() {
		return books;
	}
	public void setBooks(List<Book> books) {
		this.books = books;
	}
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}

	


}
