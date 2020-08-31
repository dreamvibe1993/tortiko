package com.example.tortiko.config;

public enum UserPermission {

    //test case permission
    USER_READ("user:read");

    private final String permission;
    UserPermission(String permission){
        this.permission = permission;
    }

    public String getPermission(){
        return permission;
    }
}