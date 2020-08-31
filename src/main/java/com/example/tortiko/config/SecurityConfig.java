package com.example.tortiko.config;

import com.example.tortiko.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/resources/static/**").permitAll()
                //.antMatchers("api/**").hasRole("ADMIN")
                .anyRequest().permitAll()
                .and()
                .formLogin()
                .loginPage("/login.html")
                .defaultSuccessUrl("/index.html", true)
                .and()
                .logout()
                .logoutUrl("/logout");

    }

}
