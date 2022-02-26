package com.hy.opyeung.excpetion;

import java.util.List;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ErrorResponse {

	private String message;
	private int status;
	private List<FieldError> errors;
	private String code;

	@Getter
	@NoArgsConstructor(access = AccessLevel.PROTECTED)
	public static class FieldError {
		private String field;
		private String value;
		private String reason;
	}

	public ErrorResponse(ErrorCode code) {
//		this.message = code.get;
//		this.status = code.getStatus();
//		this.code = code.getCode();
	}

	public static ErrorResponse of(ErrorCode code) {
		return new ErrorResponse(code);
	}

}
