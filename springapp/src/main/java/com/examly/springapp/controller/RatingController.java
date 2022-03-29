package com.examly.springapp.controller;

import com.examly.springapp.entity.Rating;
import com.examly.springapp.service.AppointmentService;
import com.examly.springapp.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RatingController {
    @Autowired
    private RatingService ratingService;

    @PostMapping("/rating")
    public Rating addRating(@RequestBody Rating rating){
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String strDate = formatter.format(date);
        rating.setGivenDate(strDate);
        return this.ratingService.addRating(rating);
    }

    @GetMapping("/getAllRatings")
    public List<Rating> getRatings(){
        return this.ratingService.getRatings();
    }

    @GetMapping("/getCentersRating/{id}")
    public List<Rating> getRatingsbyCenter(@PathVariable String id){
        return this.ratingService.getRatingbyCenter(Long.parseLong(id));
    }
    

    @GetMapping("/getUserRating")
    public List<Rating> getRatingsbyUser(){
        return this.ratingService.getRatingsbyUser();
    }

    @PutMapping("/editRating")
    public Rating editRating(@RequestBody Rating rating){
        return this.ratingService.editRating(rating);
    }

    @DeleteMapping("/deleteRating/{id}")
    public Rating deleteRating(@PathVariable String id){
        return this.ratingService.deleteRating(Long.parseLong(id));
    }
}
