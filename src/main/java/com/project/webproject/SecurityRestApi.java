package com.project.webproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SecurityRestApi {

    @Autowired
    UserRepository userRepo;

    @Autowired
    SecurityService service;

    @Autowired
    MyPasswordEncoder enc;

    @PostMapping("register")
    public ResponseEntity<String> register(
            @RequestParam String username,
            @RequestParam String password) {
        User u = service.register(username, password);

        return new ResponseEntity<>(u.getName(), HttpStatus.OK);
    }

    @PostMapping("testuser")
    public User testUser(){
        if (!userRepo.existsById("Test user")) {
            User u = service.register("Test User", "123");
            userRepo.save(u);
    
            return u;
        }
        return null;
    }

    @PostMapping("login")
    public ResponseEntity<String> login(
            @RequestParam String username,
            @RequestParam String password) {
        String token = service.login(username, password);

        if (token == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @PostMapping("delete")
    public ResponseEntity<String> delete(
            @RequestParam String username,
            @RequestParam String password) {
        String token = service.delete(username, password);

        if (token == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @GetMapping("private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer) {

        if (bearer.startsWith("bearer")) {
            String token = bearer.split(" ")[1];
            String username = service.validateJwt(token);
            if (username != null) {
                return new ResponseEntity<>("Private data for " + username, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);

    
    }
}
