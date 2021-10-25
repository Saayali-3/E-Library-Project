package com.vreadersclub.elibrary.authenticationpart.repository;
import org.springframework.data.repository.CrudRepository;

import com.vreadersclub.elibrary.authenticationpart.model.UserDao;

public interface UserRepository extends CrudRepository<UserDao, Long> {
    UserDao findByUsername(String username);

    

}