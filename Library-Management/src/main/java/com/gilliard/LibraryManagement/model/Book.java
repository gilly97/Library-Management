package com.gilliard.LibraryManagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String author;
    private Boolean checkedOut = false;
    private String years;
    private String publisher;
    private String genre;
    
	@ManyToOne
	@JoinColumn(name = "check_out_id")
	private CheckOut checkOut;
    
  // getters, setters, constructors  
//    public Client() {
//    	
//    }
//    
//    public Client(Client client) {
//    	this.name = client.getName();
//    	this.email = client.getEmail();
//    	this.checkedOut = client.getCheckedOut();
//    	
//    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public Boolean getCheckedOut() {
		return checkedOut;
	}
	public void setCheckedOut(Boolean checkedOut) {
		this.checkedOut = checkedOut;
	}
	public String getYears() {
		return years;
	}
	public void setYears(String years) {
		this.years = years;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public CheckOut getCheckOut() {
		return checkOut;
	}
	public void setCheckOut(CheckOut checkOut) {
		this.checkOut = checkOut;
	}


    
}
