package com.ssafy.ain.global.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@AllArgsConstructor
@Getter
public enum ErrorCode {
    //기본
    SERVER_ERROR(INTERNAL_SERVER_ERROR, "서버 에러가 발생했습니다!"),

    //인증 및 인가
    NOT_EXISTS_REFRESH_TOKEN(UNAUTHORIZED, "refresh token이 존재하지 않습니다!"),
    EXPIRES_ACCESS_TOKEN(UNAUTHORIZED, "access token이 만료되었습니다!"),
    EXPIRES_REFRESH_TOKEN(UNAUTHORIZED, "refresh token이 만료되었습니다!"),
    INVALID_OAUTH_PROVIDER(UNAUTHORIZED, "유효하지 않는 로그인 기관입니다!"),
    NOT_REFRESH_TOKEN(BAD_REQUEST, "토큰 유형이 refresh token이 아닙니다!"),
    NOT_ACCESS_TOKEN(BAD_REQUEST, "토큰 유형이 access token이 아닙니다!"),
    NOT_EXISTS_COOKIE(BAD_REQUEST, "Cookie가 존재하지 않습니다!"),
    INVALID_TOKEN(UNAUTHORIZED, "유효하지 않는 토큰입니다!"),
    NOT_HTTP_METHOD_POST(UNAUTHORIZED, "HTTP method가 POST가 아닙니다!"),
    NOT_LOGIN_MEMBER(FORBIDDEN, "해당 회원은 로그아웃한 상태입니다!"),

    //회원
    NOT_EXISTS_MEMBER(NOT_FOUND, "존재하지 않는 회원입니다!"),
    NOT_EXISTS_MEMBER_ID(BAD_REQUEST, "존재하지 않는 회원 id입니다!"),

    //이상형
    NOT_EXISTS_IDEAL_PERSON(NOT_FOUND, "존재하지 않는 이상형입니다!"),
    NOT_EXISTS_IDEAL_PERSON_ID(BAD_REQUEST, "존재하지 않는 이상형 id입니다!"),
    NOT_EXISTS_IDEAL_PERSON_NICKNAME(BAD_REQUEST, "이상형 닉네임을 입력해주세요!"),
    INVALID_SAME_IDEAL_PERSON_NICKNAME(BAD_REQUEST, "이미 해당 닉네임을 사용중입니다!"),
    INVALID_IDEAL_PERSON_RANKINGS_DUPLICATION(BAD_REQUEST, "idealPersonRankings의 값들 중 서로 중복된 pk가 존재합니다!"),
    INVALID_IDEAL_PERSON_GENDER(BAD_REQUEST, "이상형 성별 정보를 입력해주세요! (MALE 또는 FEMALE)"),
    INVALID_IDEAL_PERSON_COUNT(BAD_REQUEST, "이상형 목록 허용 개수(10개)를 초과하였습니다."),

    //s3
    NOT_EXISTS_FILE(NOT_FOUND, "file이 존재하지 않습니다!"),
    NOT_EXISTS_FILE_TO_UPLOAD(BAD_REQUEST, "업로드할 파일이 존재하지 않습니다!"),
    NOT_UPLOADS_FILE(INTERNAL_SERVER_ERROR, "이미지 업로드에 실패하였습니다!"),
    INVALID_URL_FORMAT(BAD_REQUEST, "요청한 URL 형식이 올바르지 않습니다!");

    private final HttpStatus status;
    private final String message;
}