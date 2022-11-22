package com.project.webproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityRestApi {

    @Autowired
    UserRepository userRepo;

    @Autowired
    MyPasswordEncoder enc;

    // @Value("${jwt.secret}")
    // private String jwtKey;

    @PostMapping("register")
    public User register(String username, String password){

        User u = new User(username, enc.encode(password));
        userRepo.save(u);
        System.out.println(username + " " + password);

        return u;
    }

    @PostMapping("login")
    public User login(String username, String password){

        User u = userRepo.findById(username).orElse(null);

        if (u == null || !enc.matches(password, u.getpassword())) {
            System.out.println("User not found");
            return null;
        }
        else{
            System.out.println(u.getName() + " " + u.getpassword());
            return u;
        }
    }
}
