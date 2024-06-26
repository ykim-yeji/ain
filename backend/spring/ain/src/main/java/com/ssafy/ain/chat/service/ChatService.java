package com.ssafy.ain.chat.service;

import com.ssafy.ain.chat.dto.ChatDTO.*;

public interface ChatService {
    AddIdealPersonChatResponse addIdealPersonChat(Long memberId, Long idealPersonId, AddIdealPersonChatRequest addIdealPersonChatRequest);
    GetIdealPersonChatsResponse getIdealPersonChats(GetIdealPersonChatsRequest getIdealPersonChatsRequest);
    void deleteIdealPersonChat(Long memberId, Long idealPersonId);
}