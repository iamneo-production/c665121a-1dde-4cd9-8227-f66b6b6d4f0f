package com.examly.springapp.dao;

import com.examly.springapp.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingDao extends JpaRepository<Rating,Long> {
}
