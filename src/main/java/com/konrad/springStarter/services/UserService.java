package com.konrad.springStarter.services;

import com.konrad.springStarter.models.User;

public interface UserService {
	public User findUserByEmail(String email);
	public void saveUser(User user);
}
