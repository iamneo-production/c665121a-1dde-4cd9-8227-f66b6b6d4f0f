package com.examly.springapp.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long book_id;

    private long u_id;
    private long sc_id;
    private String productName;
    private String purchaseDate;
    private String productModelNo;
    private String problemStatement;
    private String contactNumber;
    private String bookingDate;
    private int bookingTime;

}

