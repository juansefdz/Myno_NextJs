package com.juansefdz.myno_app_backend.api.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.MappingTarget;
import org.mapstruct.Mappings;

import com.juansefdz.myno_app_backend.api.dto.request.NoteRequest;
import com.juansefdz.myno_app_backend.api.dto.request.update.NoteUpdateRequest;
import com.juansefdz.myno_app_backend.api.dto.response.NoteResponse;
import com.juansefdz.myno_app_backend.domain.entities.Note;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface NoteMapper {
    @Mapping(target = "idNote", ignore = true)
    Note toEntity(NoteRequest noteDTO);

    NoteResponse toResponse(Note entity);

    NoteRequest toDTO(Note note);

    @Mappings({
            @Mapping(target = "idNote", ignore = true),
            @Mapping(target = "createdAt", ignore = true),
            @Mapping(target = "isActived", ignore = true),

    })
    Note updateEntity(NoteUpdateRequest noteUpdateRequest, @MappingTarget Note note);

}
