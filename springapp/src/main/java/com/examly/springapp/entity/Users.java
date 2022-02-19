package com.examly.springapp.entity;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;


@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name="user")
public class Users {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String role;
	private String name;
	@Column(unique=true)
	private String username;
	@Column(unique=true)
	private String mobile;
	@Column(unique=true)
	private String email;
	private String password;

//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	@Override
//	public String toString() {
//		return "Users [id=" + id + ", role=" + role + ", name=" + name + ", username=" + username + ", mobile=" + mobile
//				+ ", email=" + email + ", password=" + password + "]";
//	}
//	public Users(String role, String name, String username, String mobile, String email, String password) {
//		super();
//		this.role = role;
//		this.name = name;
//		this.username = username;
//		this.mobile = mobile;
//		this.email = email;
//		this.password = password;
//	}
//	public long getId() {
//		return id;
//	}
//	public void setId(long id) {
//		this.id = id;
//	}
//	public String getRole() {
//		return role;
//	}
//	public void setRole(String role) {
//		this.role = role;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getUsername() {
//		return username;
//	}
//	public void setUsername(String username) {
//		this.username = username;
//	}
//	public String getMobile() {
//		return mobile;
//	}
//	public void setMobile(String mobile) {
//		this.mobile = mobile;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public Users() {
//		super();
//		// TODO Auto-generated constructor stub
//	}


}
