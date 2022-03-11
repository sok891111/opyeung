
package com.hy.opyeung.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hy.opyeung.dao.Comment;
import com.hy.opyeung.dao.Product;
import com.hy.opyeung.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired 
	ProductService productService;


	@GetMapping("/list")
	public List<Product> list(HttpServletRequest request,
			@RequestParam(defaultValue="0") int productCnt) {
		String userId = (String)request.getAttribute("userId");
		List<Product> productList = productService.getProductList(userId , productCnt);
		
		return productList;
	}
	
	@GetMapping("/imgList")
	public List<Product> imgList(
			@RequestParam String siteId,
			@RequestParam String productCode
			) {
		List<Product> imgList = productService.getProductImgList(siteId, productCode);
		
		return imgList;
	}
	
	@GetMapping("/commentList")
	public List<Comment> commentList(
			@RequestParam String productId
			) {
		List<Comment> commentList = productService.getProductCommentList(productId);
		
		return commentList;
	}
	
	
}
