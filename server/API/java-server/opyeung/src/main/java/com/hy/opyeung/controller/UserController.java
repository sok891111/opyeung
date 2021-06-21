package com.hy.opyeung.controller;

import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hy.opyeung.dao.User;
import com.hy.opyeung.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired 
	UserService userService;


	@GetMapping("init")
	public void createCookie(HttpServletResponse response , @CookieValue(value = "userId" , defaultValue = "") String uid) {
		
		System.out.println(uid);
		if(!"".equals(uid)) return;

	    // uuid로 userID set-up
		String guid = UUID.randomUUID().toString();
		Cookie cookie = new Cookie("userId", guid);
		cookie.setMaxAge(365 * 24 * 60 * 60); 
		cookie.setHttpOnly(true);
		cookie.setPath("/");
		
	    response.addCookie(cookie);
	    System.out.println("testsetset");
	    //User 정보 setting
	    User user = new User();
	    user.setUserId(guid);
	    user.setUserNm(null);
	    user.setSessionId(null);
	    userService.createUser(user);
		
	}
	
}
