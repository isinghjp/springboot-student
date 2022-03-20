package com.springbootmongodb.springbootmongodb.Controllers;

import com.springbootmongodb.springbootmongodb.Dao.StudentDao;
import com.springbootmongodb.springbootmongodb.Entity.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
public class MyController {
    @Autowired
    private StudentDao studentDao;

    @PostMapping("/students")
    public ResponseEntity<?> addStudent(@RequestBody Student student){
        Student save = this.studentDao.save(student);
        return ResponseEntity.ok(save);
    }

    @GetMapping("/students")
    public ResponseEntity<?> getAllStudent(){
        return ResponseEntity.ok(this.studentDao.findAll());
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<?> getStudentById(@PathVariable("id") int id){
        return ResponseEntity.ok(this.studentDao.findById(id));
    }
    
    @DeleteMapping("/students/{id}")
    public ResponseEntity<?> deleteStudentById(@PathVariable("id") int id){
        this.studentDao.deleteById(id);
        return ResponseEntity.ok("Deleted Student with id " + id);
    }
    
    @PutMapping("/students/{id}")
    public ResponseEntity<?> updateStudentById(@RequestBody Student student, @PathVariable("id") int id){
        this.studentDao.save(student);
        return ResponseEntity.ok(student);
    } 
}
