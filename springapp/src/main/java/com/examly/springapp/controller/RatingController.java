package com.examly.springapp.controller;

import com.examly.springapp.entity.Rating;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RatingController {


    @PostMapping("/rating")
    public Rating addRating(@RequestBody Rating rating){
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String strDate = formatter.format(date);
        rating.setGivenDate(strDate);

    }
}
