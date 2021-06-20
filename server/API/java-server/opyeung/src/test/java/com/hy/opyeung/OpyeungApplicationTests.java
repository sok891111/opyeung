package com.hy.opyeung;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hy.opyeung.dao.Product;
import com.hy.opyeung.service.ProductService;

@SpringBootTest
class OpyeungApplicationTests {
	
	@Autowired 
	ProductService productService;

	@Test
	void test1() {
		List<Product> productList = productService.getProductList();
		for (Product product : productList) { 
			System.out.println("member = " + product.toString()); 
		}

	}

}
