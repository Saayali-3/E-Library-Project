package com.vreadersclub.elibrary.adminside.controller;

import com.vreadersclub.elibrary.adminside.entities.Book;
import com.vreadersclub.elibrary.adminside.entities.Pictures;
import com.vreadersclub.elibrary.adminside.service.BookService;
import com.vreadersclub.elibrary.adminside.service.PictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:3000/")
public class AdminController {
    @Autowired
    BookService bookService;
    @Autowired
    PictureService pictureService;

    public Pictures pictureCoverter(Book book){
        Pictures pictures = new Pictures();
        byte[] coverpicByte = Base64.getMimeDecoder().decode(book.getCoverpic());
        byte[] coverpic1Byte = Base64.getMimeDecoder().decode(book.getCoverpic1());
        byte[] coverpic2Byte = Base64.getMimeDecoder().decode(book.getCoverpic2());
        byte[] image1Byte = Base64.getMimeDecoder().decode(book.getImage1());
        byte[] image2Byte = Base64.getMimeDecoder().decode(book.getImage2());
        pictures.setId(book.getId());
        pictures.setCoverpic(coverpicByte);
        pictures.setCoverpic1(coverpic1Byte);
        pictures.setCoverpic2(coverpic2Byte);
        pictures.setImage1(image1Byte);
        pictures.setImage2(image2Byte);

        return pictures;
    }

    @PostMapping("/add-books")
    public String hello(@RequestBody Book book, Pictures pictures) {
        System.out.println("Value in Controller: " + book.toString());
        bookService.add(book);
        pictures = pictureCoverter(book);
        pictureService.add(pictures);
        System.out.println("Value in Controller: " + book.toString());
        return "Done Adding Books";
    }

    @DeleteMapping("/delete-books/{bookId}")
    public String delete(@PathVariable("bookId") long bookId){
        bookService.delete(bookId);
        pictureService.delete(bookId);
        return "Done Deleting Books";
    }

    @GetMapping("/get-book/{bookId}")
    public Optional<Book> getBook(@PathVariable("bookId") long bookId){
        return bookService.getBook(bookId);
    }

    @PutMapping("/update-book/{bookId}")
    public String update(@PathVariable("bookId") long bookId, @RequestBody Book book,Pictures pictures){
        if (book.getCoverpic() == null) book.setCoverpic("");
        pictures = pictureCoverter(book);
        bookService.update(bookId,book);
        pictureService.update(bookId,pictures);
        return "Done Updating Books";
    }

    @GetMapping("/books")
    public List<Book> GetBooks(){
        return bookService.GetAll();
    }


}