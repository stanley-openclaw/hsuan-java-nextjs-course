package com.example.demo.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

/**
 * DTO for incoming user creation/registration data. Not the Entity.
 */
public class UserRequestDTO {

    @NotBlank(message = "名稱不能為空")
    private String username;

    @NotBlank(message = "信箱不能為空")
    @Email(message = "信箱格式錯誤")
    private String email;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
