package com.hy.opyeung.dao;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class User {

	private String userId;
	private String userNm;
	public void setUserId(String userId) {
		this.userId = userId;
		// TODO Auto-generated method stub
		
	}
	public void setUserNm(String userNm) {
		this.userNm = userNm;
		// TODO Auto-generated method stub
		
	}

	
	public String getUserId() {
		return this.userId;
		
	}
	public String getUserNm() {
		return this.userNm;
		
	}
	
	
}
