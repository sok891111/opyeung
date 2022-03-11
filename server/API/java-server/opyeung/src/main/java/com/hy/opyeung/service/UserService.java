package com.hy.opyeung.service;


import java.util.Arrays;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Stream;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hy.opyeung.dao.User;
import com.hy.opyeung.mapper.UserMapper;

@Service
public class UserService {
	
	@Autowired
	UserMapper userMapper;
	private final String userInfoKey = "userId";
	
	public int createUser(String guid, String userNm){
		User user = new User();
	    user.setUserId(guid);
	    user.setUserNm(userNm);
		return userMapper.insertUser(user);
		
	}
	
	public int updateUserProductInfo(String userId, int productId , int liked){
		return userMapper.updateUserProductInfo(userId , productId , liked);
		
	}
	
	public boolean checkUserInfo(Cookie[] cookies) {
		return  Arrays.stream(Optional.ofNullable(cookies).orElseGet(()->new Cookie[0]))
						.anyMatch(c -> userInfoKey.equals(c.getName())); //cookie안에 UserId 가 있는지 확 
		
	}
	
	public String getCookieUserId(Cookie[] cookies) {
		return Arrays.stream(Optional.ofNullable(cookies).orElseGet(()->new Cookie[0]))
				.filter(c -> userInfoKey.equals(c.getName()))
				.findAny().map(Cookie::getValue).orElse(null); //cookie안의 UserId
	}
	
	
	public String setUserInfo( HttpServletResponse response  ) {

		// uuid로 userID set-up
		String guid = UUID.randomUUID().toString();
		Cookie cookie = new Cookie(userInfoKey, guid);
		cookie.setMaxAge(365 * 24 * 60 * 60); 
		cookie.setHttpOnly(true);
		cookie.setPath("/");
		
	    response.addCookie(cookie);
	    
	    return guid;
	}	
	
}
