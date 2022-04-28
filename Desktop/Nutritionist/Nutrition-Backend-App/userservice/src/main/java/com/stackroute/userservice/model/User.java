package com.stackroute.userservice.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
//@Table(name = "Users")
public class User {
	
	@Id
	//@GeneratedValue(strategy=GenerationType.AUTO)
	private String userName;
	private String email;
	private String fullName;
	private String password;
	
	public User() {
		super();
	}
	
	public User(String userName, String email, String fullName, String password) {
		super();
		this.userName = userName;
		this.email = email;
		this.fullName = fullName;
		this.password = password;
	}
	public String getUserName() {
		return this.userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFullName() {
		return this.fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPassword() {
		return this.password;
	}
	public void setPassword(String password) {
		this.password  = password;
	}
	@Override
	public String toString() {
		return "User [UserName=" + userName + ", Email=" + email + ", FullName=" + fullName + ", Password=" + password
				+ ", getUserName()=" + getUserName() + ", getEmail()=" + getEmail() + ", getFullName()=" + getFullName()
				+ ", getPassword()=" + getPassword() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	
	//@CreationTimestamp
	//private Date created;




	

}
