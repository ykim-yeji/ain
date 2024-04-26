package com.ssafy.ain.member.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum SocialProvider {

    KAKAO("카카오");

    private String name;
}