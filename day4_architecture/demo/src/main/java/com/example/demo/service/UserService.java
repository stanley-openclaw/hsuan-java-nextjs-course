package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service layer: business logic.
 * - Check if username already exists before creating a new user.
 */
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * Create user only if username does not already exist.
     *
     * @return the saved user, or null if username already exists
     */
    public User createUser(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return null; // caller should respond with 409 or 400
        }
        return userRepository.save(user);
    }
}
