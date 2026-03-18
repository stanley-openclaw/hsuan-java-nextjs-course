package com.example.demo.exception;

/**
 * Thrown when creating a user with a username that already exists.
 */
public class UsernameAlreadyExistsException extends RuntimeException {

    public UsernameAlreadyExistsException(String username) {
        super("Username already exists: " + username);
    }
}
