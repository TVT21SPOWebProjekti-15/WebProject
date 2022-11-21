package com.project.webproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityRestApi {

    @Autowired
    UserRepository userRepo;

    @Autowired
    MyPasswordEncoder enc;

    @PostMapping("register")
    public User register(String username, String password){

        User u = new User(username, password);
        userRepo.save(u);
        System.out.println(username + " " + enc.encode(password));

        return u;
    }

    @PostMapping("login")
    public User login(String username, String password){

        User u = userRepo.findById(username).orElse(null);

        if (u == null) {
            System.out.println("User not found");
            return null;
        }
        else{
            System.out.println("********************************************");
            return u;
        }
    }
}
