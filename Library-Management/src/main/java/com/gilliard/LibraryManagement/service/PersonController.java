package com.gilliard.LibraryManagement.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gilliard.LibraryManagement.model.Person;
import com.gilliard.LibraryManagement.model.CheckOut;
import com.gilliard.LibraryManagement.repo.PersonRepository;

@RestController
@RequestMapping("/persons")
public class PersonController {

    private final PersonRepository personRepository;

	public PersonController(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}
    
//	-------------------------BOOK SERVICE----------------------------------------------
    
    //View All Persons
    @GetMapping
    public List<Person> getPersons() {
        return personRepository.findAll();
    }
    



//	//View Available Persons
//    @GetMapping
//    public List<Person> getAvailablePersons() {
//        return personRepository.getAvailablePersons();
//    }
//    

    //View a Person
    @GetMapping("/{id}")
    public Person getPerson(@PathVariable Long id) {
        return personRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    //Add a new Person
    @PostMapping
    public ResponseEntity createPerson(@RequestBody Person person) throws URISyntaxException {
        Person savedPerson = personRepository.save(person);
        return ResponseEntity.created(new URI("/persons/" + savedPerson.getId())).body(savedPerson);
    }

    //Edit a Person
    @PutMapping("/{id}")
    public ResponseEntity updatePerson(@PathVariable Long id, @RequestBody Person person) {
        Person currentPerson = personRepository.findById(id).orElseThrow(RuntimeException::new);
        currentPerson.setName(person.getName());
        currentPerson.setNumber(person.getNumber());
        currentPerson = personRepository.save(person);

        return ResponseEntity.ok(currentPerson);
    }

    //Delete a Person
    @DeleteMapping("/{id}")
    public ResponseEntity deletePerson(@PathVariable Long id) {
        personRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
    