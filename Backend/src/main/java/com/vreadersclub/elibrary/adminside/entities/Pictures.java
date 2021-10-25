package com.vreadersclub.elibrary.adminside.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Pictures {
    @Id
    private long Id;

    @Lob
    private byte[] coverpic;
    @Lob
    private byte[] image1;
    @Lob
    private byte[] image2;
    @Lob
    private byte[] coverpic1;
    @Lob
    private byte[] coverpic2;

    public Pictures(byte[] coverpic, byte[] coverpic1, byte[] coverpic2, byte[] image1, byte[] image2) {
        this.coverpic = coverpic;
        this.image1 = image1;
        this.image2 = image2;
        this.coverpic1 = coverpic1;
        this.coverpic2 = coverpic2;
    }

    public long getId() {
        return Id;
    }

    public Pictures() {
    }

    public void setId(long id) {
        Id = id;
    }

    public byte[] getCoverpic() {
        return coverpic;
    }

    public void setCoverpic(byte[] coverpic) {
        this.coverpic = coverpic;
    }

    public byte[] getImage1() {
        return image1;
    }

    public void setImage1(byte[] image1) {
        this.image1 = image1;
    }

    public byte[] getImage2() {
        return image2;
    }

    public void setImage2(byte[] image2) {
        this.image2 = image2;
    }

    public byte[] getCoverpic1() {
        return coverpic1;
    }

    public void setCoverpic1(byte[] coverpic1) {
        this.coverpic1 = coverpic1;
    }

    public byte[] getCoverpic2() {
        return coverpic2;
    }

    public void setCoverpic2(byte[] coverpic2) {
        this.coverpic2 = coverpic2;
    }
}

