package com.project.webproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityRestApi {

    @Autowired
	UserRepository userRepo;

    @PostMapping("register")
	public void init(String username, String password){
        userRepo.save(new User(username, password));
        System.out.println(username + " " + password + " saved to database");
	}
    
    
}
