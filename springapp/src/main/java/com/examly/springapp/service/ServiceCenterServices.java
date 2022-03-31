package com.examly.springapp.service;

import java.util.List;


import com.examly.springapp.entity.ServiceCenter;

public interface ServiceCenterServices {

	String addCenter(ServiceCenter center);

	List<ServiceCenter> viewAllCenter();

	ServiceCenter deleteCenter(long id);

	String updateCenter(ServiceCenter center);

}
