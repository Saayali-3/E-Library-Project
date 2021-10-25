package com.vreadersclub.elibrary.authenticationpart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vreadersclub.elibrary.authenticationpart.model.FileDB;


@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}
