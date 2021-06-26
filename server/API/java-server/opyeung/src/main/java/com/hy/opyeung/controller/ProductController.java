package com.hy.opyeung.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hy.opyeung.dao.Product;
import com.hy.opyeung.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired 
	ProductService productService;


	@GetMapping("/list")
	public List<Product> list(HttpServletRequest request) {
		String userId = (String)request.getAttribute("userId");
		List<Product> productList = productService.getProductList(userId);
		
		return productList;
	}
	
}
