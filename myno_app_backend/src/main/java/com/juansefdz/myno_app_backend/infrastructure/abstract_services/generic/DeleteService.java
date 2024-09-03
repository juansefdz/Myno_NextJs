package com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic;

import com.juansefdz.myno_app_backend.api.dto.response.NoteResponse;

public interface DeleteService<Id> {
    NoteResponse delete(Id id);
}
