package com.juansefdz.myno_app_backend.config;

import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@Configuration
@OpenAPIDefinition(
    info = @Info(
        title = "MyNo App API",
        version = "1.0",
        description = "API for MyNo App",
        contact = @Contact(
            name = "Juan Sebastian Fernandez",
            email = "juanse.fermon@gmail.com")

))
public class SwaggerConfig {
    
}
