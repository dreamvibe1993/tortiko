package com.example.tortiko.controller;

import com.example.tortiko.model.User;
import com.example.tortiko.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.util.Random;

@RestController
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "api/users/create-user", method = RequestMethod.POST)
    public User createUser(@RequestBody User user)  {
        user.setUserId(new Random().nextLong());

        return userRepository.save(user);
    }

    @DeleteMapping("api/users/{userId}")
    public void deleteUser(@PathVariable("userId") User user){
        userRepository.delete(user);
    }




}
