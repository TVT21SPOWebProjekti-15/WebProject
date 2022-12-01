package com.project.webproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

@Service
public class SecurityService {

    @Autowired
    UserRepository userRepo;

    @Autowired
    MyPasswordEncoder enc;

    @Value("${jwt.secret}")
    private String jwtKey;

    public User register(String username, String password) {

        if (!userRepo.existsById(username)) {

            User u = new User(username, enc.encode(password));
            userRepo.save(u);
            System.out.println(username + " " + password);

            return u;
        }

        System.out.println("Username taken");
        return null;
    }

    public String login(String username, String password) {
        User u = userRepo.findById(username).orElse(null);

        if (u == null || !enc.matches(password, u.getpassword())) {
            System.out.println("User not found");
            return null;
        }
        System.out.println(u.getName() + " " + u.getpassword());
        Algorithm alg = Algorithm.HMAC256(jwtKey);

        return JWT.create().withSubject(u.getName()).sign(alg);
    }

    public String delete(String username, String password){
        User u = userRepo.findById(username).orElse(null);

        if (u == null || !enc.matches(password, u.getpassword())) {
            System.out.println("User not found");
        }

        userRepo.delete(u);
        return null;
    }

    public String validateJwt(String jwtToken) {
        Algorithm alg = Algorithm.HMAC256(jwtKey);
        JWTVerifier verifier = JWT.require(alg).build();

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
        }

        return null;
    }
}
