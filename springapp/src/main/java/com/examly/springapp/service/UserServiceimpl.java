package com.examly.springapp.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.dao.UserDao;
import com.examly.springapp.entity.Users;
@Service
public class UserServiceimpl implements UserServices {
	List<Users> list;
	public UserServiceimpl() {
		list=new ArrayList<>();
//		list.add(new Users("krishna","heloKrish","674577437","hello@gmail.com","password"));
	}
	@Autowired
	public UserDao dao;
	@Override
	public List<Users> getUser() {
		// TODO Auto-generated method stub
		return this.dao.findAll();
	}
	@Override
	public Users addUser(Users user) {
		// TODO Auto-generated method stub
//		list.add(new Users(user.getName(),user.getUsername(),user.getMobile(),user.getEmail(),user.getPassword()));
		dao.save(user);
		return user;
	}

}
