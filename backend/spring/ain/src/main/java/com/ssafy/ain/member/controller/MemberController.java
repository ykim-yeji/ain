package com.ssafy.ain.member.controller;

import com.ssafy.ain.global.dto.ApiResponse;
import com.ssafy.ain.global.dto.UserPrincipal;
import com.ssafy.ain.member.dto.MemberDTO.*;
import com.ssafy.ain.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.ain.global.constant.SuccessCode.GET_MEMBER_INFO;
import static com.ssafy.ain.global.constant.SuccessCode.UPDATE_MEMBER_INFO;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    /**
     * 회원 정보 입력
     * @param userPrincipal 회원 정보
     * @param addMemberInfoRequest 입력할 회원 정보
     * @return
     */
    @PatchMapping
    public ApiResponse<?> addMemberInfo(@AuthenticationPrincipal UserPrincipal userPrincipal,
                                        @RequestBody @Valid AddMemberInfoRequest addMemberInfoRequest) {
        memberService.addMemberInfo(userPrincipal.getUserInfoDTO().getMemberId(), addMemberInfoRequest);

        return ApiResponse.success(UPDATE_MEMBER_INFO);
    }

    /**
     * 회원 정보 조회
     * @param userPrincipal 회원 정보
     * @return
     */
    @GetMapping
    public ApiResponse<?> getMemberInfo(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        GetMemberInfoResponse getMemberInfoResponse = memberService.getMemberInfo(userPrincipal.getUserInfoDTO().getMemberId());

        return ApiResponse.success(GET_MEMBER_INFO, getMemberInfoResponse);
    }
}