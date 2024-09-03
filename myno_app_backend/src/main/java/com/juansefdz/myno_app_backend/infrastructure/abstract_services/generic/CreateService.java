package com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic;

public interface CreateService<Request, Response> {
    Response create(Request request);

}
