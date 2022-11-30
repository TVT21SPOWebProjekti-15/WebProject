package com.project.webproject;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
     
    @Id
    private String name;

    private String password;
    
    public User() {
    }
    
    public User(String name, String password){
        this.name = name;
        this.password = password;
    }
    
    public String getpassword() {
        return this.password;
    }
    
    public void setpassword(String password) {
        this.password = password;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User name(String name) {
        setName(name);
        return this;
    }
}
