package com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic;

import java.util.Optional;

public interface ReadService<Response, Id> {
    Optional<Response> getById(Id id);

}
