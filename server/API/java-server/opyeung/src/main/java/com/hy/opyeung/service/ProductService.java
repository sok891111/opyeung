package com.hy.opyeung.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hy.opyeung.dao.Product;
import com.hy.opyeung.mapper.ProductMapper;

@Service
public class ProductService {
	
	@Autowired
	ProductMapper productMapper;
	
	//TO DO : DI 사용...? 장점 정리 해보자 
	public List<Product> getProductList(){
		return productMapper.getProductList();
	}

}
