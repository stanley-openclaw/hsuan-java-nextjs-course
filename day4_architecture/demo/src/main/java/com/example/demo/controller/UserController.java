package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller layer: receive HTTP requests, validate input, delegate to Service.
 * No business logic here.
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        if (user == null || user.getUsername() == null || user.getUsername().isBlank()) {
            return ResponseEntity.badRequest().build();
        }
        User saved = userService.createUser(user);
        if (saved == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build(); // 409: username already exists
        }
        return ResponseEntity.ok(saved);
    }
}
