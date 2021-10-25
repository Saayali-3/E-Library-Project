package com.vreadersclub.elibrary.adminside.repository;


import com.vreadersclub.elibrary.adminside.entities.Pictures;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepository extends JpaRepository<Pictures,Long> {

}
