package com.example.demo;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(UserService userService) {
        return args -> {
            User user1 = new User();
            user1.setUsername("Alice");
            user1.setEmail("alice@example.com");
            userService.createUser(user1);

            User user2 = new User();
            user2.setUsername("Bob");
            user2.setEmail("bob@example.com");
            userService.createUser(user2);

            System.out.println("Database has been initialized with 2 users.");
        };
    }
}
