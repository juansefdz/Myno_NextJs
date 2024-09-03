package com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic;

import org.springframework.data.domain.Page;


public interface ReadAllService <Response> {
    Page<Response> getAll(int page, int size);

}
