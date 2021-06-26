package com.hy.opyeung.controller;

import java.util.UUID;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hy.opyeung.dao.User;
import com.hy.opyeung.service.CommonService;
import com.hy.opyeung.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired 
	UserService userService;
	
	@Autowired 
	CommonService CommonService;
	
	@GetMapping("init")
	public void createCookie(HttpServletResponse response ) {
		
	    // uuid로 userID set-up
		String guid = UUID.randomUUID().toString();
		Cookie cookie = new Cookie("userId", guid);
		cookie.setMaxAge(365 * 24 * 60 * 60); 
		cookie.setHttpOnly(true);
		cookie.setPath("/");
		
	    response.addCookie(cookie);
	    //User 정보 setting
	    User user = new User();
	    user.setUserId(guid);
	    user.setUserNm(null);
	    user.setSessionId(null);
	    userService.createUser(user);
		
	}
	
	
	@PutMapping("productInfo")
	public void userProductInfo(HttpServletRequest request,
			@RequestParam(value = "siteId") String siteId ,
			@RequestParam(value = "productCode") String productCode ,
			@RequestParam(value = "liked") int liked ) {
		String userId = (String)request.getAttribute("userId");
		userService.updateUserProductInfo(userId , siteId , productCode, liked);   
		
	}
	
}

