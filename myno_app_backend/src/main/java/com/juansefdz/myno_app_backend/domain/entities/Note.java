package com.juansefdz.myno_app_backend.domain.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "note")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "note_id")
    private Long idNote;
    @Column(name = "title", nullable = false, length = 100)
    private String title;
    @Lob
    private String descriptionNote;
    @Column(name = "created_at", nullable = false)
    private Date createdAt;
    @Column(name = "date_note", nullable = false)
    private Date dateNote;
    @Column(name = "is_actived", nullable = false)
    private Boolean isActived;

}
