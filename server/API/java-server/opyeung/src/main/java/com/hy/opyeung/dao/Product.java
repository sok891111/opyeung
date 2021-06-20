package com.hy.opyeung.dao;

import lombok.Data;
import lombok.Getter;

//@Data
//@Getter
public class Product {
	private int inx;
	private String siteNm;
	private String siteIcon;
	private String category;
	private String categoryDesc;
	private int productCode;
	private String url;
	private String productName;
	private String productDesc;
	private int price;
	private int discountPrice;
	private String productImg;
	
	public int getInx() {
		return this.inx;
	}
	
	public String getSiteNm() {
		return this.siteNm;
	}
	
	public String getSiteIcon() {
		return this.siteIcon;
	}
	
	public String getCategory() {
		return this.category;
	}
	
	public String getCategoryDesc() {
		return this.categoryDesc;
	}
	
	public int getProductCode() {
		return this.productCode;
	}
	
	
	public String getUrl() {
		return this.url;
	}
	
	public String getProductName() {
		return this.productName;
	}
	
	public String getProductDesc() {
		return this.productDesc;
	}
	
	public int getPrice() {
		return this.price;
	}

	public int getDiscountPrice() {
		return this.discountPrice;
	}
	
	public String getProductImg() {
		return this.productImg;
	}
	
	
}
