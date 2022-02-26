package com.examly.springapp.service;

import java.util.List;


import com.examly.springapp.entity.ServiceCenter;

public interface ServiceCenterServices {

	ServiceCenter addCenter(ServiceCenter center);

	List<ServiceCenter> viewAllCenter();

	ServiceCenter deleteCenter(long id);

	ServiceCenter updateCenter(ServiceCenter center);

}
