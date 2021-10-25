package com.vreadersclub.elibrary.adminside.repository;

import com.vreadersclub.elibrary.adminside.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
