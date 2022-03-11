package com.hy.opyeung.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hy.opyeung.dao.Comment;
import com.hy.opyeung.dao.Product;

@Mapper
public interface ProductMapper {
	public List<Product> getProductList(String userId, int productCnt);
	public List<Product> getProductImgList(String siteId, String productCode);
	public List<Comment> getProductCommetList( String productId);
	
}
