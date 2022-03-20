package com.springbootmongodb.springbootmongodb.Entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Student")
public class Student {
    private int id;
    private String name;
    private String course;
    private String year;

    
    public Student() {
    }
    public Student(int id, String name, String course, String year) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.year = year;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCourse() {
        return course;
    }
    public void setCourse(String course) {
        this.course = course;
    }
    public String getYear() {
        return year;
    }
    public void setYear(String year) {
        this.year = year;
    }
    @Override
    public String toString() {
        return "Student [course=" + course + ", id=" + id + ", name=" + name + ", year=" + year + "]";
    }

    
}
