package com.vreadersclub.elibrary.authenticationpart.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vreadersclub.elibrary.authenticationpart.model.UserEntity;



@Repository("userRepo")
public interface UserRepo extends CrudRepository<UserEntity, String> {

    UserEntity findByEmailIgnoreCase(String email);

}