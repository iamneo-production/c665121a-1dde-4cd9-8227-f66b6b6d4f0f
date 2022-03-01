package com.examly.springapp.service;

import com.examly.springapp.config.SecurityUtils;
import java.util.ArrayList;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.dao.ServiceCenterDao;
import com.examly.springapp.entity.ServiceCenter;

@Service
public class ServiceCenterServicesimpl implements ServiceCenterServices {
	@Autowired
	private ServiceCenterDao centerDao;
	@Override
	public ServiceCenter addCenter(ServiceCenter center) {
		this.centerDao.save(center);
		return center;
	}
	@Override
	public List<ServiceCenter> viewAllCenter() {
		// TODO Auto-generated method stub
		Optional<String> currentUserLogin = SecurityUtils.getCurrentUserLogin();
		System.out.println(currentUserLogin.get());
		if(!currentUserLogin.get().equals("admin")){
			System.out.println("Your not an admin to add service");
			return new ArrayList<>();
		}
		return centerDao.findAll();
	}
	@Override
	public ServiceCenter deleteCenter(long id) {
		// TODO Auto-generated method stub
		List<ServiceCenter> centers = viewAllCenter();
		ServiceCenter center = new ServiceCenter();
		for(ServiceCenter x : centers) {
			if(x.getId()==id) {
				center = x;
				this.centerDao.delete(center);
			}
		}
		return center;
	}
	@Override
	public ServiceCenter updateCenter(ServiceCenter center) {
		// TODO Auto-generated method stub
		this.centerDao.save(center);
		return center;
	}

}
