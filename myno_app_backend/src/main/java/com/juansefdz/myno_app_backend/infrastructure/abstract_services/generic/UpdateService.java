package com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic;

public interface UpdateService<Request, Response, Id> {
    Response update(Id id, Request request);
}
