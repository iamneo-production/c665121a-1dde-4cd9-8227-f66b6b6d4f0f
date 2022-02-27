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
		return this.dao.findAll();
	}
	@Override
	public String addUser(Users user) {
		// TODO Auto-generated method stub
//		list.add(new Users(user.getName(),user.getUsername(),user.getMobile(),user.getEmail(),user.getPassword()))

		boolean emailAlreadyExists = dao.existsUserByEmail(user.getEmail());
		boolean userNameAlreadyExists = dao.existsUserByUsername(user.getUsername());
        boolean mobileAlreadyExists = dao.existsUserByMobile(user.getMobile());

        if (emailAlreadyExists) {
            return "Email";
        }
        if (mobileAlreadyExists) {
            return "Mobile";
        }
		if (userNameAlreadyExists){
			return "Username";
		}
        try {
            dao.save(user);
            return "Success";
        } catch (Exception e) {
            return "Error";
        }
	}

	@Override
	public Users editUser(Users user) {
		return this.dao.save(user);
	}

	@Override
	public Users deleteUser(long id) {
		List<Users> users = getUser();
		Users user = new Users();
		for(Users u:users){
			if(u.getId()==id){
				user = u;
				this.dao.delete(user);
			}
		}
		return user;
	}

}
