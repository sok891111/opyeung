package com.hy.opyeung.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Autowired
	@Qualifier(value = "httpInterceptor")
	private HandlerInterceptor interceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(interceptor)
				.addPathPatterns("/**")
				.excludePathPatterns("/user/init");
			
	}
	
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
//        		.allowedOrigins("*")
//        		.allowCredentials(true)
        		.allowedOrigins("http://localhost:8080")
        		.allowedOrigins("http://opyeung.com")
        		.allowedMethods("GET", "POST" , "PUT");
        
        
    }
}
