package com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic;


import com.juansefdz.myno_app_backend.api.dto.request.update.NoteUpdateRequest;

public interface UpdateService<UpdateRequest, Response, Id> {
    Response update(Id id, NoteUpdateRequest request);
}
