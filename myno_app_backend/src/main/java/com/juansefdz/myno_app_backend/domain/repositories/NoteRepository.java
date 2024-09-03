package com.juansefdz.myno_app_backend.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juansefdz.myno_app_backend.domain.entities.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {

}
