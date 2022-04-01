package com.examly.springapp.service;

import com.examly.springapp.config.SecurityUtils;
import java.util.ArrayList;
import java.util.List;

import java.util.Objects;
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
	public String addCenter(ServiceCenter center) {
		List<ServiceCenter> centers = viewAllCenter();
		for(ServiceCenter x : centers){
			if(x.getId()==center.getId()){
				return "id";
			}
			if((x.getName().toLowerCase()).equals(center.getName().toLowerCase()) && (x.getAddress().toLowerCase()).equals(x.getAddress().toLowerCase())){
				return "exist";
			}
		}
		this.centerDao.save(center);
		return "success";
	}
	@Override
	public List<ServiceCenter> viewAllCenter() {
		// TODO Auto-generated method stub
		Optional<String> currentUserLogin = SecurityUtils.getCurrentUserLogin();
		System.out.println(currentUserLogin.get());
		
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
	public String updateCenter(ServiceCenter center) {
		Optional<ServiceCenter> centerTemp = this.centerDao.findById(center.getId());
		ServiceCenter center1 = centerTemp.orElseThrow(()->new RuntimeException("No suh data found"));
		List<ServiceCenter> centers = viewAllCenter();
		for(ServiceCenter x: centers){
			if(Objects.equals(x,center1)){
				continue;
			}
			if((x.getName().toLowerCase()).equals(center.getName().toLowerCase()) && (x.getAddress().toLowerCase()).equals(center.getAddress().toLowerCase())){
				return "exist";
			}
		}

		center1.setName(center.getName());
		center1.setAddress(center.getAddress());
		center1.setDetails(center.getDetails());
		center1.setEmail(center.getEmail());
		center1.setMobile(center.getMobile());
		center1.setImageurl(center.getImageurl());


		this.centerDao.save(center1);
		return "success";

	}

}
