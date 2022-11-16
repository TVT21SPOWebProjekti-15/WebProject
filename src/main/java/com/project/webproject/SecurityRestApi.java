package com.project.webproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityRestApi {

    @Autowired
	UserRepository userRepo;

    @PostMapping("register")
	public void init(){
        System.out.println("Tämä printtaa backendin kautta");
        //userRepo.save(new User(0L, ));
	}
}
