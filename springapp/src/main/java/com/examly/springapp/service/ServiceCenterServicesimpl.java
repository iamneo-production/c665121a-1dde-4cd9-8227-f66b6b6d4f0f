package com.examly.springapp.service;

import java.util.List;

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
