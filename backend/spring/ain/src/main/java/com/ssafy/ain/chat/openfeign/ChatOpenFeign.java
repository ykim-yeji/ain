package com.ssafy.ain.chat.openfeign;

import com.ssafy.ain.chat.dto.ChatOpenFeignDTO.*;
import com.ssafy.ain.global.dto.OpenFeignResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;

//@FeignClient(name = "ChatOpenFeign", url = "https://myain.co.kr/fast/chats")
@FeignClient(name = "ChatOpenFeign", url = "http://localhost:8000/chats")
public interface ChatOpenFeign {

    @PostMapping("/ideal-people")
    OpenFeignResponse<AddIdealPersonChatOFResponse> addIdealPersonChat(AddIdealPersonChatOFRequest addIdealPersonChatOFRequest);
}