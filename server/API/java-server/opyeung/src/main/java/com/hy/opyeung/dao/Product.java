package com.hy.opyeung.dao;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Product {
	private int siteId;
	private String siteNm;
	private String siteIcon;
	private String category;
	private String categoryDesc;
	private int productId;
	private int productCode;
	private String url;
	private String productNm;
	private String productDesc;
	private String productTagMost;	
	private int price;
	private int discountPrice;
	private String productImg;
	private String detailImg;
//	
//	public int getSiteId() {
//		return this.siteId;
//	}
//	
//	public String getSiteNm() {
//		return this.siteNm;
//	}
//	
//	public String getSiteIcon() {
//		return this.siteIcon;
//	}
//	
//	public String getCategory() {
//		return this.category;
//	}
//	
//	public String getCategoryDesc() {
//		return this.categoryDesc;
//	}
//	
//	public int getProductId() {
//		return this.productId;
//	}
//	
//	
//	public int getProductCode() {
//		return this.productCode;
//	}
//	
//	
//	public String getUrl() {
//		return this.url;
//	}
//	
//	public String getProductNm() {
//		return this.productNm;
//	}
//	
//	public String getProductDesc() {
//		return this.productDesc;
//	}
//	
//	public int getPrice() {
//		return this.price;
//	}
//
//	public int getDiscountPrice() {
//		return this.discountPrice;
//	}
//	
//	public String getProductImg() {
//		return this.productImg;
//	}
//	
//	public String getDetailImg() {
//		return this.detailImg;
//	}
	
	
}
