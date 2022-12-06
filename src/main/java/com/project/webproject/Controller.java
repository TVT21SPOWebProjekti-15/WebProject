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
@CrossOrigin (origins = "*")
@GetMapping (path = "/AnnualNorthern")
public ResponseEntity<List<Info>> GetAnnualNorhern(){
    List<Info> info =jdbcTemplate.query("SELECT * FROM anomalies_annual_northern",new BeanPropertyRowMapper(Info.class));

    return new ResponseEntity<>(info,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/AnnualSouthern")
public ResponseEntity<List<Info>> GetAnnualSouthern(){
    List<Info> info =jdbcTemplate.query("SELECT * FROM anomalies_annual_southern",new BeanPropertyRowMapper(Info.class));

    return new ResponseEntity<>(info,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/MonthlyGlobal")
public ResponseEntity<List<Info>> GetMonthlyGlobal(){
    List<Info> info =jdbcTemplate.query("SELECT * FROM anomalies_monthly_global",new BeanPropertyRowMapper(Info.class));

    return new ResponseEntity<>(info,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/MonthlyNorthern")
public ResponseEntity<List<Info>> GetMonthlyNorthern(){
    List<Info> info =jdbcTemplate.query("SELECT * FROM anomalies_monthly_northern",new BeanPropertyRowMapper(Info.class));

    return new ResponseEntity<>(info,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/MonthlySouthern")
public ResponseEntity<List<Info>> GetMonthlySouthern(){
    List<Info> info =jdbcTemplate.query("SELECT * FROM anomalies_monthly_southern",new BeanPropertyRowMapper(Info.class));

    return new ResponseEntity<>(info,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/Reconstruction")
public ResponseEntity<List<Info>> GetReconstruction(){
    List<Info> info =jdbcTemplate.query("SELECT * FROM temperature_reconstruction",new BeanPropertyRowMapper(Info.class));

    return new ResponseEntity<>(info,HttpStatus.OK);
    
}
}