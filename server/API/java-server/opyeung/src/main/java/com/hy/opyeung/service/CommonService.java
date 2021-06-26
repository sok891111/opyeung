package com.hy.opyeung.service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

@Service
public class CommonService {
	
	public boolean checkValidUser(HttpServletRequest request){
		
		String user = null;
		
		for (Cookie cookie : request.getCookies()) 
		    if("userId".equals(cookie.getName())) user = cookie.getValue();
		
		return null == user ? true : false;
		
	}

}