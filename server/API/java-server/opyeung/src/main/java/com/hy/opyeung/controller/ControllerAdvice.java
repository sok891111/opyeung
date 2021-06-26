package com.hy.opyeung.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hy.opyeung.excpetion.OpyeungException;

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(OpyeungException.class)
	public ResponseEntity<Map<String, Object>> handler(OpyeungException e) {
		Map<String, Object> resBody = new HashMap<>();
		resBody.put("message", e.getMessage());

		return new ResponseEntity<>(resBody, e.getStatus());
	}
	
}

