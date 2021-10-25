package com.vreadersclub.elibrary.adminside.service;


import com.vreadersclub.elibrary.adminside.entities.Pictures;
import com.vreadersclub.elibrary.adminside.repository.PictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PictureService {
    @Autowired
    PictureRepository pictureRepository;

    public void add(Pictures picture){
        System.out.println("----------_________" +picture.toString()+"___________----------");
        pictureRepository.save(picture);
        //System.out.println(Arrays.toString(book.getCoverpic()));
    }
    public void update(long bookId, Pictures picture){
        picture.setId(bookId);
        System.out.println("----------_________" +picture.toString()+"___________----------");
        pictureRepository.save(picture);
        System.out.println(picture.getCoverpic());
    }
    public void delete(long id){
        pictureRepository.deleteById(id);
    }
    public Optional<Pictures> getBook(long id){
        return pictureRepository.findById(id);
    }


    public List<Pictures> GetAll(){
        return pictureRepository.findAll();
    }
}

