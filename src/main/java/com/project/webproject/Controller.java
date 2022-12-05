package com.project.webproject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @Autowired
    JdbcTemplate jdbcTemplate;
    
@CrossOrigin (origins = "*")
@GetMapping (path = "/Info")
public ResponseEntity<List<Info>> GetAllInfo(){
    List<Info> info =jdbcTemplate.query("SELECT * FROM anomalies_annual_global",new BeanPropertyRowMapper(Info.class));

    return new ResponseEntity<>(info,HttpStatus.OK);
    
}
}