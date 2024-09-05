package com.juansefdz.myno_app_backend.infrastructure.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.juansefdz.myno_app_backend.api.dto.request.NoteRequest;
import com.juansefdz.myno_app_backend.api.dto.request.update.NoteUpdateRequest;
import com.juansefdz.myno_app_backend.api.dto.response.NoteResponse;
import com.juansefdz.myno_app_backend.api.mappers.NoteMapper;
import com.juansefdz.myno_app_backend.domain.entities.Note;
import com.juansefdz.myno_app_backend.domain.repositories.NoteRepository;
import com.juansefdz.myno_app_backend.infrastructure.abstract_services.INoteService;
import com.juansefdz.myno_app_backend.util.exceptions.ResourceNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class NoteService implements INoteService {

    private NoteRepository noteRepository;
    private NoteMapper noteMapper;

    /*
     * ---------------------------- GET ALL ----------------------------
     */
    @Override
    public Page<NoteResponse> getAll(int page, int size) {
        return noteRepository.findAll(Pageable.ofSize(size).withPage(page)).map(noteMapper::toResponse);
    }

    /*
     * ---------------------------- GET BY ID ----------------------------
     */
    @Override
    public Optional<NoteResponse> getById(Long id) {
        return Optional.ofNullable(this.noteMapper.toResponse(this.find(id)));
    }
    /*
     * ---------------------------- CREATE -------------------------------
     */

    @Override
    public NoteResponse create(NoteRequest request) {
        return this.noteMapper.toResponse(noteRepository.save(this.noteMapper.toEntity(request)));
    }

    /*
     * ---------------------------- UPDATE -------------------------------
     */

    @Override
    public NoteResponse update(Long id, NoteUpdateRequest updateRequest) {
        Note noteCreated = this.find(id);
        noteCreated = this.noteMapper.updateEntity(updateRequest, noteCreated);

        return this.noteMapper.toResponse(noteRepository.save(noteCreated));
    }

    /*
     * ---------------------------- DELETE -------------------------------
     */

    @Override
    public NoteResponse delete(Long id) {
        Note note = this.find(id);
        noteRepository.delete(note);
        return this.noteMapper.toResponse(note);

    }
    /*
     * ---------------------------- FIND -------------------------------
     */

    private Note find(Long id) {
        return noteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Note not found"));
    }

    /*
     * ------------------------ UPDATE STATUS -----------------------------
     */
    @Override
    public NoteResponse updateStatus(Long id, Boolean status) {
        Note note = this.find(id);
        note.setIsActived(status);
        Note updatedNote = noteRepository.save(note);
        return noteMapper.toResponse(updatedNote);
    }

}
