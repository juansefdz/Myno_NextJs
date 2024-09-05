package com.juansefdz.myno_app_backend.api.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.juansefdz.myno_app_backend.api.dto.errors.BaseErrorResponse;
import com.juansefdz.myno_app_backend.api.dto.request.NoteRequest;
import com.juansefdz.myno_app_backend.api.dto.request.update.NoteUpdateRequest;
import com.juansefdz.myno_app_backend.api.dto.response.NoteResponse;

import com.juansefdz.myno_app_backend.infrastructure.abstract_services.INoteService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "notes")
@AllArgsConstructor
@Tag(name = "Note", description = "Operations related to notes")
public class NoteController {

	@Autowired
	private INoteService noteService;

	/*
	 * ---------------------------- GET ALL ----------------------------
	 */
	@Operation(summary = "Display all notes", description = "Get all notes in the system")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "SUCCESSFUL", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Page.class))),
			@ApiResponse(responseCode = "400", description = "BAD REQUEST", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "401", description = "NOT AUTHORIZED", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "403", description = "FORBIDDEN ACCESS", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class)))
	})
	@GetMapping
	public ResponseEntity<Page<NoteResponse>> getAll(
			@RequestParam(defaultValue = "1") Integer page,
			@RequestParam(defaultValue = "10") Integer size) {

		return ResponseEntity.ok(noteService.getAll(page - 1, size));
	}

	/*
	 * ---------------------------- GET BY ID ----------------------------
	 */
	@Operation(summary = "Display a note by id", description = "Get a note by id in the system")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "SUCCESSFUL", content = @Content(mediaType = "application/json", schema = @Schema(implementation = NoteResponse.class))),
			@ApiResponse(responseCode = "400", description = "BAD REQUEST", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "401", description = "NOT AUTHORIZED", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "403", description = "FORBIDDEN ACCESS", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "404", description = "NOT FOUND", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class)))
	})
	@GetMapping("/{id}")
	public ResponseEntity<NoteResponse> getById(@PathVariable Long id) {
		return ResponseEntity.ok(noteService.getById(id).orElse(null));
	}

	/*
	 * ---------------------------- CREATE -------------------------------
	 */
	@Operation(summary = "Create a note", description = "Create a note in the system")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "CREATED", content = @Content(mediaType = "application/json", schema = @Schema(implementation = NoteResponse.class))),
			@ApiResponse(responseCode = "400", description = "BAD REQUEST", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "401", description = "NOT AUTHORIZED", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "403", description = "FORBIDDEN ACCESS", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class)))
	})
	@PostMapping
	public ResponseEntity<NoteResponse> create(@Valid @RequestBody NoteRequest request) {
		return ResponseEntity.ok(noteService.create(request));
	}

	/*
	 * ---------------------------- UPDATE -------------------------------
	 */

	@Operation(summary = "Update a note", description = "Update a note in the system")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "SUCCESSFUL", content = @Content(mediaType = "application/json", schema = @Schema(implementation = NoteResponse.class))),
			@ApiResponse(responseCode = "400", description = "BAD REQUEST", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "401", description = "NOT AUTHORIZED", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "403", description = "FORBIDDEN ACCESS", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "404", description = "NOT FOUND", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class)))
	})
	@PutMapping("/{id}")
	public ResponseEntity<NoteResponse> update(@PathVariable Long id, @Valid @RequestBody NoteUpdateRequest request) {
		return ResponseEntity.ok(noteService.update(id, request));
	}

	/*
	 * ---------------------------- DELETE -------------------------------
	 */
	@Operation(summary = "Delete note by ID", description = "Disables a previously created note identified by its ID")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "SUCCESSFUL", content = @Content(mediaType = "application/json", schema = @Schema(implementation = NoteResponse.class))),
			@ApiResponse(responseCode = "400", description = "BAD REQUEST", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "401", description = "NOT AUTHORIZED", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "403", description = "FORBIDDEN ACCESS", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "404", description = "NOT FOUND", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class))),
			@ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR", content = @Content(mediaType = "application/json", schema = @Schema(implementation = BaseErrorResponse.class)))
	})
	@DeleteMapping("/{id}")
	public ResponseEntity<NoteResponse> delete(@PathVariable Long id) {
		return ResponseEntity.ok(noteService.delete(id));
	}

	/*
	 * ---------------------------- UPDATE STATUS -------------------------------
	 */

	@PatchMapping("/{id}/status")
	public ResponseEntity<NoteResponse> updateStatus(@PathVariable Long id,
			@RequestBody Map<String, Boolean> statusUpdate) {
		Boolean status = statusUpdate.get("isActived");
		NoteResponse updatedNote = noteService.updateStatus(id, status);
		return ResponseEntity.ok(updatedNote);
	}

}
