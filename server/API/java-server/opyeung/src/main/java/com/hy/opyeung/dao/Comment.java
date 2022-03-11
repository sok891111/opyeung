package com.hy.opyeung.dao;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Comment {
	private int commentId;	
	private int productId;
	private String userId;
	private String delYn;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime createTm;	
}
