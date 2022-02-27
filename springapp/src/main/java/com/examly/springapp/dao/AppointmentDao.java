package com.examly.springapp.dao;

import com.examly.springapp.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentDao extends JpaRepository<Appointment,Long> {
}
