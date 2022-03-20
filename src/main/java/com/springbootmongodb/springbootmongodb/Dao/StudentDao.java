package com.springbootmongodb.springbootmongodb.Dao;

import com.springbootmongodb.springbootmongodb.Entity.Student;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;

@Component
public interface StudentDao extends MongoRepository<Student, Integer>{
    
}
