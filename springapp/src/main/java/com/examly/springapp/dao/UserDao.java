package com.examly.springapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.entity.Users;

public interface UserDao extends JpaRepository<Users,Long>{
    boolean existsUserByEmail(String email);
    boolean existsUserByMobile(String mobile);
    boolean existsUserByUsername(String username);
    Users findByUsername(String username);
    Users findByEmail(String email);


}
