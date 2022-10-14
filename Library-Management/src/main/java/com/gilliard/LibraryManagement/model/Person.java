package com.gilliard.LibraryManagement.model;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue
	private Long id;
	
	private String name;
	private String number;
	@OneToOne(mappedBy = "person", cascade = CascadeType.ALL)
	private CheckOut checkOut;
	
	
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
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public CheckOut getCheckOut() {
		return checkOut;
	}
	public void setCheckOut(CheckOut checkOut) {
		this.checkOut = checkOut;
	}
	
}
