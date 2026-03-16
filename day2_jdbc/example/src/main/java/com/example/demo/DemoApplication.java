package com.example.demo;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
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
    CommandLineRunner initDatabase(UserRepository repository) {
        return args -> {
            User user1 = new User();
            user1.setName("Alice");
            user1.setEmail("alice@example.com");
            repository.save(user1);

            User user2 = new User();
            user2.setName("Bob");
            user2.setEmail("bob@example.com");
            repository.save(user2);
            
            System.out.println("Database has been initialized with 2 users.");
        };
    }
}
