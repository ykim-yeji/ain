package com.ssafy.ain.chat.controller;

import com.ssafy.ain.chat.dto.ChatDTO.*;
import com.ssafy.ain.chat.service.ChatService;
import com.ssafy.ain.global.dto.ApiResponse;
import com.ssafy.ain.global.dto.UserPrincipal;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.ain.global.constant.SuccessCode.CREATE_IDEAL_PERSON_CHAT;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chats")
public class ChatController {

    private final ChatService chatService;

    /**
     * 이상형과의 채팅 전송
     * @param userPrincipal 회원 정보
     * @param idealPersonId 이상형 id
     * @param addIdealPersonChatRequest 회원이 보낸 채팅 메시지
     * @return
     */
    @PostMapping("/ideal-people/{idealPersonId}")
    public ApiResponse<?> addIdealPersonChat(@AuthenticationPrincipal UserPrincipal userPrincipal,
                                             @PathVariable Long idealPersonId,
                                             @RequestBody @Valid AddIdealPersonChatRequest addIdealPersonChatRequest) {
        Long memberId = userPrincipal.getUserInfoDTO().getMemberId();
        AddIdealPersonChatResponse addIdealPersonChatResponse = chatService.addIdealPersonChat(memberId, idealPersonId, addIdealPersonChatRequest);

        return ApiResponse.success(CREATE_IDEAL_PERSON_CHAT, addIdealPersonChatResponse);
    }
}