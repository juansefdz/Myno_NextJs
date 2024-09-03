package com.juansefdz.myno_app_backend.api.dto.response;

import java.util.Date;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NoteResponse {
    @Schema(description = "Id of the note", example = "1")
    private Long idNote;
    @Schema(description = "Title of the note", example = "Note 1")
    private String title;
    @Schema(description = "Description of the note", example = "This is a note")
    private String descriptionNote;
    @Schema(description = "Date of creation of the note", example = "2021-09-01")
    private Date createdAt;
    @Schema(description = "Date of the note. cannot be prior to date of creation ", example = "2021-09-01")
    private Date dateNote;
    @Schema(description = "Indicates if the note is active", example = "true")
    private Boolean isActived;

}
