package com.examly.springapp.controller;

import com.examly.springapp.config.SecurityUtils;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.entity.ServiceCenter;
import com.examly.springapp.service.ServiceCenterServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceCenterController {
	@Autowired
	private ServiceCenterServices centerService;
	
	@PostMapping("/addServiceCenter")
	public ServiceCenter addCenter(@RequestBody ServiceCenter center) {
		Optional<String> currentUserLogin = SecurityUtils.getCurrentUserLogin();
		System.out.println(currentUserLogin.get());
		if(currentUserLogin.get() == "admin"){
			return this.centerService.addCenter(center);
		}
		return null;
	}
	
	@GetMapping("/viewAllCenter")
	public List<ServiceCenter> viewAllCenter(){
		return this.centerService.viewAllCenter();
	}
	
	@DeleteMapping("/deleteCenter/{id}")
	public ServiceCenter deleteCenter(@PathVariable String id) {
		ServiceCenter deleted = this.centerService.deleteCenter(Long.parseLong(id));
		return deleted;
	}
	@PutMapping("/updateCenter")
		public ServiceCenter updateCenter(@RequestBody ServiceCenter center) {
			return this.centerService.updateCenter(center);
		}
}
