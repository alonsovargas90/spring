package com.konrad.springStarter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.konrad.springStarter.models.User;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Long> {
	 User findByEmail(String email);
}
