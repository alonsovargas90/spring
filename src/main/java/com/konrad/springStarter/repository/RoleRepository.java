package com.konrad.springStarter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.konrad.springStarter.models.Role;

@Repository("roleRepository")
public interface RoleRepository extends JpaRepository<Role, Integer>{
	Role findByRole(String role);

}
