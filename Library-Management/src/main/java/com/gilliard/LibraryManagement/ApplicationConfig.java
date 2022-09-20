package com.gilliard.LibraryManagement;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan({"com.myapp.repositories", "com.gilliard.LibraryManagement"})
@Configuration
@EnableJpaRepositories("com.gilliard.LibraryManagement.repo")
public class ApplicationConfig {

}
