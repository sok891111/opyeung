package com.hy.opyeung.excpetion;

import org.springframework.http.HttpStatus;

public class OpyeungException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	private HttpStatus status;
	private String message;

	public OpyeungException(HttpStatus status, String message) {
		this.status = status;
		this.message = message;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

}
