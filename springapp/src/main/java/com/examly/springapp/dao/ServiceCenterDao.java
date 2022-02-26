package com.examly.springapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.entity.ServiceCenter;

public interface ServiceCenterDao extends JpaRepository<ServiceCenter,Long>{

}
