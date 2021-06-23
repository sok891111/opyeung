package com.hy.opyeung.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hy.opyeung.dao.User;
import com.hy.opyeung.mapper.UserMapper;

@Service
public class UserService {
	
	@Autowired
	UserMapper userMapper;
	
	public int createUser(User user){
		return userMapper.insertUser(user);
		
	}
	
	public int updateUserProductInfo(String userId, String productId , int liked){
		return userMapper.updateUserProductInfo(userId , productId , liked);
		
	}

}
