package com.hy.opyeung.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.hy.opyeung.dao.User;

@Mapper
public interface UserMapper {
	public int insertUser(User user);
}
