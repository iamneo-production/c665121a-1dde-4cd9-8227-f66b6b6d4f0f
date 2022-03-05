package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.entity.Users;
import java.util.Optional;

public interface UserServices {
	public List<Users> getUser();

	public String addUser(Users user);

    Users editUser(Users user);

	Users deleteUser(long id);
}
