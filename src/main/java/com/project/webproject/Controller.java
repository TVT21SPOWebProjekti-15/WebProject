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
@CrossOrigin (origins = "*")
@GetMapping (path = "/MaunaLoa")
public ResponseEntity<List<Info>> GetMaunaLoa(){
    List<Info> v3 =jdbcTemplate.query("SELECT * FROM maunaloa_co2",new BeanPropertyRowMapper(V3.class));

    return new ResponseEntity<>(v3,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/Dss")
public ResponseEntity<List<Info>> GetDss(){
    List<Info> v4 =jdbcTemplate.query("select * from antarctic_ice_core_records_dss ORDER BY Year ASC;",new BeanPropertyRowMapper(V4.class));

    return new ResponseEntity<>(v4,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/De08")
public ResponseEntity<List<Info>> Getde08(){
    List<Info> v4 =jdbcTemplate.query("select * from antarctic_ice_core_records_de08 ORDER BY Year ASC;;",new BeanPropertyRowMapper(V4.class));

    return new ResponseEntity<>(v4,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/De082")
public ResponseEntity<List<Info>> Getde082(){
    List<Info> v4 =jdbcTemplate.query("select * from antarctic_ice_core_records_de08_2 ORDER BY Year ASC;",new BeanPropertyRowMapper(V4.class));

    return new ResponseEntity<>(v4,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/Vostok")
public ResponseEntity<List<Info>> GetVostok(){
    List<Info> v5 =jdbcTemplate.query("select * from vostok_co2 ORDER BY mean_age_of_the_air DESC;",new BeanPropertyRowMapper(V5.class));

    return new ResponseEntity<>(v5,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/IceCore800k")
public ResponseEntity<List<Info>> GetIceCore800k(){
    List<Info> v6 =jdbcTemplate.query("select * from ice_core_800k order by age_gas_calBP asc;",new BeanPropertyRowMapper(V6.class));

    return new ResponseEntity<>(v6,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/GastReconstruction")
public ResponseEntity<List<Info>> GetGastReconstruction(){
    List<Info> v72 =jdbcTemplate.query("select * from evolution_gast_reconstruction order by time asc;",new BeanPropertyRowMapper(V72.class));

    return new ResponseEntity<>(v72,HttpStatus.OK);
    
}
@CrossOrigin (origins = "*")
@GetMapping (path = "/Evolution_Co2")
public ResponseEntity<List<Info>> GetEvolution_Co2(){
    List<Info> v7 =jdbcTemplate.query("select * from evolution_c02 order by time asc;",new BeanPropertyRowMapper(V7.class));

    return new ResponseEntity<>(v7,HttpStatus.OK);
    
}
}