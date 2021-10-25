package com.vreadersclub.elibrary.adminside.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.sql.Date;
import java.util.Arrays;

@Entity
public class Book {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String author;
    private String edition;
    private double price;
    private String type;
    private String publishDate;
    private Integer totalNumber;
    private String description;
    private String category;

    public void setId(Long id) {
        this.id = id;
    }

    @Lob
    private String coverpic;
    @Lob
    private String coverpic1;
    @Lob
    private String coverpic2;
    @Lob
    private String image1;
    @Lob
    private String image2;


    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Book(String title, String category, String author, String edition, double price, String type, String publishDate, Integer totalNumber, String description, String coverpic, String image1, String image2, String coverpic1, String coverpic2) {
        this.title = title;
        this.author = author;
        this.edition = edition;
        this.price = price;
        this.type = type;
        this.publishDate = publishDate;
        this.totalNumber = totalNumber;
        this.description = description;
        this.category = category;
        this.coverpic = coverpic;
        this.image1 = image1;
        this.image2 = image2;
        this.coverpic1 = coverpic1;
        this.coverpic2 = coverpic2;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getIsEbook() {
        return type;
    }


    public String getCoverpic1() {
        return coverpic1;
    }

    public void setCoverpic1(String coverpic1) {
        this.coverpic1= coverpic1;
    }

    public String getCoverpic2() {
        return coverpic2;
    }

    public void setCoverpic2(String coverpic2) {
        this.coverpic2= coverpic2;
    }

    public void setEbook(String ebook) {
        type = ebook;
    }

    public String getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(String publishDate) {
        this.publishDate = publishDate;
    }

    public Integer getTotalNumber() {
        return totalNumber;
    }

    public void setTotalNumber(Integer totalNumber) {
        this.totalNumber = totalNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCoverpic() {
        return coverpic;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", edition='" + edition + '\'' +
                ", price=" + price +
                ", type='" + type + '\'' +
                ", publishDate='" + publishDate + '\'' +
                ", totalNumber=" + totalNumber +
                ", description='" + description + '\'' +
                ", coverpic='" + coverpic + '\'' +
                ", coverpic1='" + coverpic1 + '\'' +
                ", coverpic2='" + coverpic2 + '\'' +
                ", image1='" + image1 + '\'' +
                ", image2='" + image2 + '\'' +
                '}';
    }

    public void setCoverpic(String coverpic) {
        this.coverpic = coverpic;
    }

    public Book() {
    }
}
