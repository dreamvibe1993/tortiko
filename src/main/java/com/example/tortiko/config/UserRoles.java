package com.example.tortiko.config;

import com.google.common.collect.Sets;

import java.util.Set;

import static com.example.tortiko.config.UserPermission.USER_READ;

public enum UserRoles {
    USER(Sets.newHashSet()),
    ADMIN(Sets.newHashSet(USER_READ));

    private final Set<UserPermission> permissions;
    UserRoles(Set<UserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<UserPermission> getPermissions() {
        return permissions;
    }
}
