package com.ssafy.ain.idealperson.service;

import com.ssafy.ain.idealperson.dto.IdealPersonDTO.GetIdealPeopleResponse;

public interface IdealPersonService {
    GetIdealPeopleResponse getIdealPeopleList(String memberId);
}