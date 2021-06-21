package com.hy.opyeung.dao;

import lombok.Data;
import lombok.Getter;

//@Data
//@Getter
public class User {
	private int inx;
	private String userId;
	private String userNm;
	private String sessionId;

	
	public int getInx() {
		return this.inx;
	}
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getUserId() {
		return this.userId;
	}
	
	public String userNm() {
		return this.userId;
	}
	
	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}
	
	public String getSessionId() {
		return this.sessionId;
	}
	
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	
	
}
