package com.examly.springapp.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.entity.Login;
import com.examly.springapp.entity.Users;
import com.examly.springapp.service.UserServices;

@RestController
public class MyController {
	@Autowired
	private UserServices User;
	
	@GetMapping("/getuser")
	public List<Users> getUser(){
		return this.User.getUser();
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/signup")
	public Users addUser(@RequestBody Users user,HttpSession session) {
		user.setRole("user");
		return this.User.addUser(user);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/login")
	public String validateUser(@RequestBody Login login) {
		List<Users> user = getUser();
		for(Users u:user){
			if((login.getEmail().equals(u.getEmail()))&&(login.getPassword().equals(u.getPassword()))) 
			{
				return u.getRole();
			}
		}
		return "invalid user";
	}
	
	
}
