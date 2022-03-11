package com.hy.opyeung.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.hy.opyeung.excpetion.OpyeungException;
import com.hy.opyeung.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class HttpInterceptor implements HandlerInterceptor {
	
	@Autowired 
	UserService userService;
	
	@Override
	public boolean preHandle(HttpServletRequest request,
		HttpServletResponse response, Object handler) throws Exception {
		
		//Only IOS acceptable
		if( request.getHeader("user-agent").indexOf("iPhone") == -1 )
			return false;
		
		String userId = userService.getCookieUserId(request.getCookies());
		
				
		if(null == userId) 
			throw new OpyeungException(HttpStatus.NOT_FOUND ,"Invalid Access");

		request.setAttribute("userId", userId);
		return true;
		
		
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object object, Exception arg3) throws Exception {

    }
	
	
}
