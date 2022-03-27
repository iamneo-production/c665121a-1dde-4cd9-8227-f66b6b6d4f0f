package com.examly.springapp.service;

import com.examly.springapp.entity.Rating;

import java.util.List;

public interface RatingService {
    Rating addRating(Rating rating);

    List<Rating> getRatings();

    List<Rating> getRatingbyCenter(long id);

    List<Rating> getRatingsbyUser();

    Rating editRating(Rating rating);

    Rating deleteRating(long id);
}
