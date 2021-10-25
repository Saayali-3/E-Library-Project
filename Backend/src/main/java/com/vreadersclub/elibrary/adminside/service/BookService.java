package com.vreadersclub.elibrary.adminside.service;

import com.vreadersclub.elibrary.adminside.entities.Book;
import com.vreadersclub.elibrary.adminside.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookService {
    @Autowired
    BookRepository bookRepository;

    public void add(Book book){
        System.out.println("----------_________" +book.toString()+"___________----------");
        bookRepository.save(book);
        //System.out.println(Arrays.toString(book.getCoverpic()));
    }
    public void update(long bookId, Book book){
        book.setId(bookId);
        System.out.println("----------_________" +book.toString()+"___________----------");
        bookRepository.save(book);
        //System.out.println(Arrays.toString(book.getCoverpic()));
    }
    public void delete(long id){
        bookRepository.deleteById(id);
    }
    public Optional<Book> getBook(long id){
        return bookRepository.findById(id);
    }


    public java.util.List<Book> GetAll(){
        return bookRepository.findAll();
    }
}
