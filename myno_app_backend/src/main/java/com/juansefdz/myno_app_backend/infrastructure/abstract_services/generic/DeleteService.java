package com.juansefdz.myno_app_backend.infrastructure.abstract_services.generic;

public interface DeleteService<Id> {
    void delete(Id id);
}
