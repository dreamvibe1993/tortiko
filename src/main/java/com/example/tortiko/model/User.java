package com.example.tortiko.model;


import javax.persistence.*;

import static com.example.tortiko.config.UserRoles.USER;

@Entity
@Table(name="users", schema = "public")
public class User {
    @Id
    @Column(name = "user_id")
    private String userId;

    @Column(name = "email")
    private String username;

    @Column(name = "password")
    private String password;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
