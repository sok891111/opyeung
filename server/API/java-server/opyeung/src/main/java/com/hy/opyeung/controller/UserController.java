package com.hy.opyeung.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	public boolean createCookie(HttpServletRequest request , 
									HttpServletResponse response ) {
		
		boolean existUser = userService.checkUserInfo(request.getCookies());
		
		if(false == existUser) {
			String userId = userService.setUserInfo(response);
			userService.createUser(userId , "");
		}

		
		return existUser;
	}
	
	
//	@PostMapping(path="productInfo" ,  produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	@GetMapping("productInfo")
	public void userProductInfo(HttpServletRequest request,
			@RequestParam int productId ,
			@RequestParam int liked ) {
		userService.updateUserProductInfo(
											request.getAttribute("userId").toString() ,
											productId, 
											liked);   
		
	}
	
	
}

