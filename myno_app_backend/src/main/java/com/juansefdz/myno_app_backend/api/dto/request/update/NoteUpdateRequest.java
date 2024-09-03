package com.juansefdz.myno_app_backend.api.dto.request.update;

import java.util.Date;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NoteUpdateRequest {

    @Schema(description = "Title of the note", example = "Note 1")
    @NotBlank(message = "Title is required")
    @Size(max = 100, message = "Title must be less than 100 characters")
    private String title;
    @Schema(description = "Description of the note", example = "This is a note")
    @NotBlank(message = "Description is required")
    @Size(max = 1000, message = "Description must be less than 1000 characters")
    private String descriptionNote;
    @Schema(description = "Date of the note. cannot be prior to date of creation ", example = "2021-09-01")
    private Date dateNote;

}
