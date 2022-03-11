package com.hy.opyeung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hy.opyeung.dao.Comment;
import com.hy.opyeung.dao.Product;
import com.hy.opyeung.mapper.ProductMapper;

@Service
public class ProductService {
	
	@Autowired
	ProductMapper productMapper;
	
	//TO DO : DI 사용...? 장점 정리 해보자 
	public List<Product> getProductList(String userId){
		return productMapper.getProductList(userId , 0);
	}
	
	public List<Product> getProductList(String userId , int productCnt){
		return productMapper.getProductList(userId , productCnt);
	}
	
	
	public List<Product> getProductImgList(String siteId, String productCode){
		return productMapper.getProductImgList(siteId, productCode);
	}
	
	public List<Comment> getProductCommentList(String productId){
		return productMapper.getProductCommetList(productId);
	}	
	
	

}
