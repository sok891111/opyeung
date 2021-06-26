package com.hy.opyeung.interceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.hy.opyeung.excpetion.OpyeungException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class HttpInterceptor implements HandlerInterceptor {
	@Override
	public boolean preHandle(HttpServletRequest request,
		HttpServletResponse response, Object handler) throws Exception {
		String userId = null;
		
		if( null != request.getCookies()) {
			for (Cookie cookie : request.getCookies()) 
			    if("userId".equals(cookie.getName())) userId = cookie.getValue();
		}
		
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
