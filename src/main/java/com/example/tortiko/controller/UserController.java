package com.example.tortiko.controller;

import com.example.tortiko.model.User;
import com.example.tortiko.model.UserDTO;
import com.example.tortiko.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.util.Random;
import java.util.UUID;

@RestController
public class UserController {

    private final UserRepository userRepository;
    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "api/users/create-user", method = RequestMethod.POST)
    public String createUser(@RequestBody UserDTO user)  {
        User newUser = new User();
        newUser.setUserId(UUID.randomUUID().toString());
        System.out.println("generated ID is :" + newUser.getUserId());
        newUser.setUsername(user.getUsername());
        //newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setPassword(user.getPassword());
        userRepository.save(newUser);
        return "redirect:/api/users/{userId}";
    }

    @DeleteMapping("api/users/{userId}")
    public void deleteUser(@PathVariable("userId") User user){
        userRepository.delete(user);
    }




}
