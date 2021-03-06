package com.example.tortiko.service;

import com.example.tortiko.model.User;
import com.example.tortiko.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        User userFromDb = userRepository.findByUsername(username);
        if (userFromDb == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return userFromDb;
    }
}
