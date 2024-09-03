package com.juansefdz.myno_app_backend.infrastructure.abstract_services;

import org.springframework.stereotype.Service;

import com.juansefdz.myno_app_backend.api.dto.request.NoteRequest;
import com.juansefdz.myno_app_backend.api.dto.request.update.NoteUpdateRequest;
import com.juansefdz.myno_app_backend.api.dto.response.NoteResponse;
import com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic.CreateService;
import com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic.DeleteService;
import com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic.ReadAllService;
import com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic.ReadService;
import com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic.UpdateService;

@Service
public interface INoteService extends
        CreateService<NoteRequest, NoteResponse>,
        ReadAllService<NoteResponse>,
        ReadService<NoteResponse, Long>,
        UpdateService<NoteUpdateRequest, NoteResponse, Long>,
        DeleteService<Long> {

}
