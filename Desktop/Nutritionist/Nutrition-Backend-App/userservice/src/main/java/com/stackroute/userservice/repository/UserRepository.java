package com.stackroute.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{
	public User findByUserNameAndPassword(String UserName, String Password) throws UserNotFoundException;
	//public boolean registerUser(User user);

	//public boolean updateUser(User user);

	//public boolean deleteUser(String UserId);
}
