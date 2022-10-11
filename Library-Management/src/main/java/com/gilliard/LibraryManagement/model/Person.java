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
	@OneToMany(mappedBy = "person", cascade = CascadeType.ALL)
	private List<CheckOut> checkOuts;
	
	
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
	public List<CheckOut> getCheckOuts() {
		return checkOuts;
	}
	public void setCheckOuts(List<CheckOut> checkOuts) {
		this.checkOuts = checkOuts;
	}
	
}
